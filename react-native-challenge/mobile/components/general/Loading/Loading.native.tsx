import React from 'react';
import { View } from 'react-native';
import Text from '../../general/Text/Text.native';
import { styles } from './LoadingStyles.native';

const Loading = () => {
  return (
    <View style={styles.loading}>
      <Text title={'Loading...'} />
    </View>
  );
};

export default Loading;