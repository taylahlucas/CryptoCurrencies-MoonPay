import React from 'react';
import { Dimensions, View } from 'react-native';
import { styles } from './CurrencyTableStyles.native';
import Text from '@components/general/Text/Text.native';
import useMainState from '@redux/hooks/useMainState';

interface CurrencyTableItemProps {
  testID: string;
  code: string;
  name: string;
}

const CurrencyTableItem = ({ testID, code, name }: CurrencyTableItemProps) => {
  const { isTablet } = useMainState();

  return (
    <View testID={testID} style={{ ...styles.itemContainer, width: isTablet ? '50%' : Dimensions.get('window').width }}>
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

export default CurrencyTableItem;