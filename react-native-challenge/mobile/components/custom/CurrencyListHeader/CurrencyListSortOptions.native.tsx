import React from 'react';
import { View } from 'react-native';
import useMainDispatch from '@redux/hooks/useMainDispatch';
import useMainState from '@redux/hooks/useMainState';
import { codeString, nameString } from '@utils/Constants';
import { styles } from './CurrencyListHeaderStyles.native';
import CurrencyListSortItem from './CurrencyListSortItem.native';

const CurrencyListSortOptions = () => {
  const { setSortOptions } = useMainDispatch();
  const { sortOptions } = useMainState();
  
  return (
    <View style={styles.sortOptionsContainer}>
      <CurrencyListSortItem 
        title={codeString}
        active={sortOptions.code === 'ascend'}
        onPress={(): void => setSortOptions({
          code: sortOptions.code === 'ascend' ? 'descend' : 'ascend',
          name: 'none'
        })}
      />
      <CurrencyListSortItem 
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

export default CurrencyListSortOptions;