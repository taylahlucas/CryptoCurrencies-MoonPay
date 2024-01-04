import React from 'react';
import { View } from 'react-native';
import useMainDispatch from '@redux/hooks/useMainDispatch';
import useMainState from '@redux/hooks/useMainState';
import { codeString, nameString } from '@utils/Constants';
import { styles } from './CurrencyTableHeaderStyles.native';
import CurrencyTableSortItem from './CurrencyTableSortItem.native';

const CurrencyTableSortOptions = () => {
  const { setSortOptions } = useMainDispatch();
  const { sortOptions } = useMainState();
  
  return (
    <View style={styles.sortOptionsContainer}>
      <CurrencyTableSortItem 
        title={codeString}
        active={sortOptions.code === 'ascend'}
        onPress={(): void => setSortOptions({
          code: sortOptions.code === 'ascend' ? 'descend' : 'ascend',
          name: 'none'
        })}
      />
      <CurrencyTableSortItem 
        title={nameString}
        active={sortOptions.name === 'ascend'}
        onPress={(): void => setSortOptions({
          code: 'none',
          name: sortOptions.name === 'ascend' ? 'descend' : 'ascend',
        })}
      />
    </View>
  );
};

export default CurrencyTableSortOptions;