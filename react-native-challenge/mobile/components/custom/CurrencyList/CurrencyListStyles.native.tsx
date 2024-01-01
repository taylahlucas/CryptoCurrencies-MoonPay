import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  currencyList: {
    paddingBottom: 200
  },
  itemContainer: {
    width: '100%',
    flexDirection: 'row',
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
    width: 220,
    padding: 8,
  }
});