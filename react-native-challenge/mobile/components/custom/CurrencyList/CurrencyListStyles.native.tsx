import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  itemContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'grey',
    borderBottomWidth: 0.4
  },
  itemCode: {
    marginLeft: 16,
    padding: 16
  },
  itemName: {
    width: '100%',
    padding: 16
  }
});