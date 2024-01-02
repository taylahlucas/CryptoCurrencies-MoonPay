import React from 'react';
import { View } from 'react-native';
import { styles } from './CurrencyListHeaderStyles.native';
import CurrencyListFilterItem from './CurrencyListFilterItem.native';
import useMainDispatch from '../../../redux/hooks/useMainDispatch';
import useMainState from '../../../redux/hooks/useMainState';

const CurrencyListFilterOptions = () => {
  const { setFilterOptions } = useMainDispatch();
  const { filterOptions } = useMainState();

  return (
    <View style={styles.filterOptionsContainer}>
      <CurrencyListFilterItem 
        title={'Supported in US'} 
        active={filterOptions.supportedInUS}
        onPress={(): void => setFilterOptions({
          ...filterOptions,
          supportedInUS: !filterOptions.supportedInUS
        })}
      />
      <CurrencyListFilterItem 
        title={'Supported in Test Mode'}
        active={filterOptions.supportedInTest}
        onPress={(): void => setFilterOptions({
          ...filterOptions,
          supportedInTest: !filterOptions.supportedInTest
        })}
      />
    </View>
  );
};

export default CurrencyListFilterOptions;