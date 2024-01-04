import React from 'react';
import { View, Button } from 'react-native';
import { shuffleString } from '@utils/Constants';
import { styles } from './CurrencyTableHeaderStyles.native';
import useShuffleCurrencyTable from './hooks/useShuffleCurrencyTable.native';

const CurrencyTableShuffle = () => {
  const { shuffleCurrencyTable } = useShuffleCurrencyTable();

  return (
    <View style={styles.shuffleContainer}>
      <Button title={shuffleString} onPress={shuffleCurrencyTable} />
    </View>
  );
};

export default CurrencyTableShuffle;