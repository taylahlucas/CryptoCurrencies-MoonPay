import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './CurrencyListHeaderStyles.native';
import { textStyles } from '../../../styles/global';

interface CurrencyListFilterItemProps {
  title: string;
};

const CurrencyListFilterItem = ({ title }: CurrencyListFilterItemProps) => {
  return (
    <View style={styles.filterItemContainer}>
      <Pressable style={styles.filterButton} />
      <Text style={textStyles.standardText}>{title}</Text>
    </View>
  );
};

export default CurrencyListFilterItem;