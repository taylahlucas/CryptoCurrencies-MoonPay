import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import axios from 'axios';
import CurrencyList from '../components/custom/CurrencyList/CurrencyList.native';
import CurrencyListHeader from '../components/custom/CurrencyListHeader/CurrencyListHeader.native';
import { CurrencyItem } from '../utils/CustomInterfaces';

const Currencies = () => {
  const [data, setData] = useState<CurrencyItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response  = await axios.get('https://api.moonpay.com/v3/currencies');
        const currencyItems = response.data.map((item: any) => {
          return {
            id: item.id,
            code: item.code,
            name: item.name,
            supportedInUS: false,
            supportedInTest: item.supportsTestMode ?? false
          }
        });

        setData(currencyItems);
      }
      catch (error) {
        console.error('Error fetching data:', error);
        Alert.alert("Error fetching data");
      }
    };

    fetchData();
  }, []); 

  return (
    <View>
      <CurrencyListHeader />
      <CurrencyList data={data} />
    </View>
  );
};

export default Currencies; 