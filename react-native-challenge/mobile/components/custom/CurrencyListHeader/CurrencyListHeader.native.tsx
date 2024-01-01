import React from 'react';
import { View } from 'react-native';
import CurrencyListFilterOptions from './CurrencyListFilterOptions.native';
import CurrencyListShuffle from './CurrencyListShuffle.native';
import { styles } from './CurrencyListHeaderStyles.native';
import CurrencyListSortOptions from './CurrencyListSortOptions.native';

const CurrencyListHeader = () => {
  return (
    <>
      <View style={styles.headerContainer}>
        <CurrencyListFilterOptions />
        <CurrencyListShuffle />
      </View>
      <CurrencyListSortOptions />
    </>
  );
};

export default CurrencyListHeader;