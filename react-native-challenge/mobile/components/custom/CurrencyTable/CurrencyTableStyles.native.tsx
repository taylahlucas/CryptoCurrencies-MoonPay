import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  CurrencyTable: {
    paddingBottom: 200
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: 'grey',
    borderBottomWidth: 0.4
  },
  itemCode: {
    width: 100,
    padding: 16,
    color: 'grey'
  },
  itemName: {
    width: '100%',
    padding: 8
  }
});