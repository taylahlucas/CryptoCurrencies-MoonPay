import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './CurrencyListStyles.native';

const CurrencyListItem = () => {

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemCode}>Code</Text>
      <Text style={styles.itemName}>Name</Text>
    </View>
  );
};

export default CurrencyListItem;