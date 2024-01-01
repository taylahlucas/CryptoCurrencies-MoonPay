import React from 'react';
import { View } from 'react-native';
import ScrollableList from '../../general/ScrollableList/ScrollableList.native';
import CurrencyListItem from './CurrencyListItem.native';

const CurrencyList = () => {
  return (
    <ScrollableList>
      {/* <View style={{ backgroundColor: 'red', width: '100%', height: 45 }} />
      <View style={{ backgroundColor: 'blue', width: '100%', height: 45 }} /> */}
      <CurrencyListItem />
      <CurrencyListItem />
      <CurrencyListItem />
    </ScrollableList>
  );
};

export default CurrencyList;