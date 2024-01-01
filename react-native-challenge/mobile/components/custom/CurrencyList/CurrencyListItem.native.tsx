import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './CurrencyListStyles.native';
import { textStyles } from '../../../styles/global';

interface CurrencyListItemProps {
  code: string;
  name: string;
}

const CurrencyListItem = ({ code, name }: CurrencyListItemProps) => {
  return (
    <View style={styles.itemContainer}>
      <Text 
        style={{ 
          ...styles.itemCode, 
          ...textStyles.standardText
        }}
        numberOfLines={2}
      >{code}</Text>
      <Text 
        style={{ 
          ...styles.itemName, 
          ...textStyles.standardText
        }}
        numberOfLines={2}
        >{name}</Text>
    </View>
  );
};

export default CurrencyListItem;