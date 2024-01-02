import React from 'react';
import { View, Button } from 'react-native';
import { shuffleString } from '../../../utils/Constants';
import { styles } from './CurrencyListHeaderStyles.native';
import useShuffleCurrencyList from './hooks/useShuffleCurrencyList.native';

const CurrencyListShuffle = () => {
  const { shuffleCurrencyList } = useShuffleCurrencyList();

  return (
    <View style={styles.shuffleContainer}>
      <Button title={shuffleString} onPress={shuffleCurrencyList} />
    </View>
  );
};

export default CurrencyListShuffle;