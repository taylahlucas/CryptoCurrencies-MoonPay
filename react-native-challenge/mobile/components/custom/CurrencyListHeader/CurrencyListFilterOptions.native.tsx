import React from 'react';
import { View } from 'react-native';
import { styles } from './CurrencyListHeaderStyles.native';
import CurrencyListFilterItem from './CurrencyListFilterItem.native';

const CurrencyListFilterOptions = () => {
  return (
    <View style={styles.filterOptionsContainer}>
      <CurrencyListFilterItem title={'Sort by name'} />
      <CurrencyListFilterItem title={'Sort by code'} />
    </View>
  );
};

export default CurrencyListFilterOptions;