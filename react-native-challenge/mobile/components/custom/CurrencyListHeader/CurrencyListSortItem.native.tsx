import React from 'react';
import { Pressable } from 'react-native';
import { styles } from './CurrencyListHeaderStyles.native';
import Text from '@components/general/Text/Text.native';

interface CurrencyListSortItemProps {
  title: string;
  active: boolean;
  onPress: () => void;
}

const CurrencyListSortItem = ({ title, active = false, onPress }: CurrencyListSortItemProps) => {
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

export default CurrencyListSortItem;