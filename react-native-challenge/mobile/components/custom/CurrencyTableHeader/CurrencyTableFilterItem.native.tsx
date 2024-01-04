import React from 'react';
import { View, Pressable } from 'react-native';
import { styles } from './CurrencyTableHeaderStyles.native';
import Text from '@components/general/Text/Text.native';

interface CurrencyTableFilterItemProps {
  testID: string;
  title: string;
  active: boolean;
  onPress: () => void;
};

const CurrencyTableFilterItem = ({ testID, title, active = false, onPress }: CurrencyTableFilterItemProps) => {
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

export default CurrencyTableFilterItem;