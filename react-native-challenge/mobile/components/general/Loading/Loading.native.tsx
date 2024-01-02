import React from 'react';
import { View } from 'react-native';
import Text from '../../general/Text/Text.native';
import { styles } from './LoadingStyles.native';
import { loadingString } from '../../../utils/Constants';

const Loading = () => {
  return (
    <View style={styles.loading}>
      <Text title={loadingString} />
    </View>
  );
};

export default Loading;