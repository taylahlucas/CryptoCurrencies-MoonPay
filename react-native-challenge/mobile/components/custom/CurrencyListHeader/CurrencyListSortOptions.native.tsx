import React from 'react';
import { Pressable, View, Text} from 'react-native';
import { styles } from './CurrencyListHeaderStyles.native';

const CurrencyListSortOptions = () => {
  return (
    <View style={styles.sortOptionsContainer}>
      <Pressable style={styles.sortOptionsItem}>
        <Text>Code</Text>
      </Pressable>
      <Pressable style={styles.sortOptionsItem}>
        <Text>Name</Text>
      </Pressable>
    </View>
  );
};

export default CurrencyListSortOptions;