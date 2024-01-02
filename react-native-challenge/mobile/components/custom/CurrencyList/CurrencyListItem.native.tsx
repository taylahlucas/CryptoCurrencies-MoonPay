import React from 'react';
import { View } from 'react-native';
import { styles } from './CurrencyListStyles.native';
import Text from '../../general/Text/Text.native';

interface CurrencyListItemProps {
  code: string;
  name: string;
}

const CurrencyListItem = ({ code, name }: CurrencyListItemProps) => {
  return (
    <View style={styles.itemContainer}>
      <Text
        title={code}
        style={styles.itemCode}
        numberOfLines={2}
      />
      <Text
        title={name}
        style={styles.itemName}
        numberOfLines={2}
      />
    </View>
  );
};

export default CurrencyListItem;