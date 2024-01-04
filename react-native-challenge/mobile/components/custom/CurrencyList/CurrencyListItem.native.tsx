import React from 'react';
import { View } from 'react-native';
import { styles } from './CurrencyListStyles.native';
import Text from '@components/general/Text/Text.native';

interface CurrencyListItemProps {
  testID: string;
  code: string;
  name: string;
}

const CurrencyListItem = ({ testID, code, name }: CurrencyListItemProps) => {
  return (
    <View testID={testID} style={styles.itemContainer}>
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