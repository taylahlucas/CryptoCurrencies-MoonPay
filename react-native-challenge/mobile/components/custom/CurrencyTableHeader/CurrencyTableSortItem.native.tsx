import React from 'react';
import { Pressable } from 'react-native';
import { styles } from './CurrencyTableHeaderStyles.native';
import Text from '@components/general/Text/Text.native';

interface CurrencyTableSortItemProps {
  title: string;
  active: boolean;
  onPress: () => void;
}

const CurrencyTableSortItem = ({ title, active = false, onPress }: CurrencyTableSortItemProps) => {
  return (
    <Pressable 
      style={styles.sortOptionsItem}
      onPress={onPress}
    >
      <Text 
        title={`${title}  ${active ? 'v' : '>'}`}
        type={'bold'} 
        style={{ color: 'white'}} 
      />
    </Pressable>
  );
};

export default CurrencyTableSortItem;