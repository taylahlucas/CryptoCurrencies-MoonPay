import React from 'react';
import { View, Pressable } from 'react-native';
import { styles } from './CurrencyListHeaderStyles.native';
import Text from '@components/general/Text/Text.native';

interface CurrencyListFilterItemProps {
  testID: string;
  title: string;
  active: boolean;
  onPress: () => void;
};

const CurrencyListFilterItem = ({ testID, title, active = false, onPress }: CurrencyListFilterItemProps) => {
  return (
    <View testID={testID} style={styles.filterItemContainer}>
      <Pressable 
        style={{
          ...styles.filterButton,
          backgroundColor: active ? 'blue' : 'red'
        }} 
        onPress={onPress} 
      />
      <Text title={title} />
    </View>
  );
};

export default CurrencyListFilterItem;