import React from 'react';
import { View, Button } from 'react-native';
import { styles } from './CurrencyListHeaderStyles.native';

const CurrencyListShuffle = () => {
  return (
    <View style={styles.shuffleContainer}>
      <Button title={'Shuffle'} onPress={(): void => console.log("SHUFFLE")} />
    </View>
  );
};

export default CurrencyListShuffle;