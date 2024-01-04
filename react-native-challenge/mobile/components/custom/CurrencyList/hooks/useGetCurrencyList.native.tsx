import { useEffect } from 'react';
import { Alert } from 'react-native';
import axios from 'axios';
import useMainDispatch from '@redux/hooks/useMainDispatch';

const useGetCurrencyList = () => {
  const { setCurrencyData, setFilteredCurrencyData } = useMainDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response  = await axios.get('https://api.moonpay.com/v3/currencies');
        const currencyItems = response.data.map((item: any) => {
          return {
            id: item.id,
            code: item.code,
            name: item.name,
            supportedInUS: item.isSupportedInUS ?? false,
            supportedInTest: item.supportsTestMode ?? false
          }
        });

        setCurrencyData(currencyItems);
        setFilteredCurrencyData(currencyItems);
      }
      catch (error) {
        console.error('Error fetching data:', error);
        Alert.alert("Error fetching data");
      }
    };

    fetchData();
  }, []); 
};

export default useGetCurrencyList;