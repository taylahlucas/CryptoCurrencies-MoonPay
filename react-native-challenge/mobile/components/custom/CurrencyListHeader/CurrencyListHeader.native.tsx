import React from 'react';
import { View } from 'react-native';
import CurrencyListFilterOptions from './CurrencyListFilterOptions.native';
import CurrencyListShuffle from './CurrencyListShuffle.native';
import { styles } from './CurrencyListHeaderStyles.native';

const CurrencyListHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <CurrencyListFilterOptions />
      <CurrencyListShuffle />
    </View>
  );
};

export default CurrencyListHeader;