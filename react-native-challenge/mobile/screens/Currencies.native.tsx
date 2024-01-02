import React from 'react';
import { View } from 'react-native';
import CurrencyList from '../components/custom/CurrencyList/CurrencyList.native';
import CurrencyListHeader from '../components/custom/CurrencyListHeader/CurrencyListHeader.native';
import useGetCurrencyList from '../components/custom/CurrencyList/hooks/useGetCurrencyList.native';
import useMainState from '../redux/hooks/useMainState';
import Condition from '../components/general/Condition.native';
import Loading from '../components/general/Loading/Loading.native';

const Currencies = () => {
  const { currencyData } = useMainState();

  useGetCurrencyList();

  return (
    <View>
      <CurrencyListHeader />
      <Condition 
        condition={!!currencyData && currencyData.length > 0}
        conditionalElement={<Loading />}
      >
        <CurrencyList />
      </Condition>
    </View>
  );
};

export default Currencies; 