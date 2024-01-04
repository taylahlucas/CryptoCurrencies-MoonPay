import React from 'react';
import { View } from 'react-native';
import { styles } from './CurrencyTableHeaderStyles.native';
import CurrencyTableFilterItem from './CurrencyTableFilterItem.native';
import useMainDispatch from '@redux/hooks/useMainDispatch';
import useMainState from '@redux/hooks/useMainState';
import { supportedInUSString, supportedInTestString } from '@utils/Constants';

const CurrencyTableFilterOptions = () => {
  const { setFilterOptions } = useMainDispatch();
  const { filterOptions } = useMainState();

  return (
    <View style={styles.filterOptionsContainer}>
      <CurrencyTableFilterItem
        testID={'supported-in-US'}
        title={supportedInUSString} 
        active={filterOptions.supportedInUS}
        onPress={(): void => setFilterOptions({
          ...filterOptions,
          supportedInUS: !filterOptions.supportedInUS
        })}
      />
      <CurrencyTableFilterItem 
        testID={'supported-in-Test'}
        title={supportedInTestString}
        active={filterOptions.supportedInTest}
        onPress={(): void => setFilterOptions({
          ...filterOptions,
          supportedInTest: !filterOptions.supportedInTest
        })}
      />
    </View>
  );
};

export default CurrencyTableFilterOptions;