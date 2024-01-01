import React from 'react';
import { View } from 'react-native';
import CurrencyList from '../components/custom/CurrencyList/CurrencyList.native';
import CurrencyListHeader from '../components/custom/CurrencyListHeader/CurrencyListHeader.native';

const Currencies = () => {
  return (
    <View>
      <CurrencyListHeader />
      <CurrencyList />
    </View>
  );
};

export default Currencies; 