import React from 'react';
import { View } from 'react-native';
import CurrencyTableFilterOptions from './CurrencyTableFilterOptions.native';
import CurrencyTableShuffle from './CurrencyTableShuffle.native';
import { styles } from './CurrencyTableHeaderStyles.native';
import CurrencyTableSortOptions from './CurrencyTableSortOptions.native';

const CurrencyTableHeader = () => {
  return (
    <>
      <View style={styles.headerContainer}>
        <CurrencyTableFilterOptions />
        <CurrencyTableShuffle />
      </View>
      <CurrencyTableSortOptions />
    </>
  );
};

export default CurrencyTableHeader;