import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  headerContainer: {
    height: 140,
    flexDirection: 'row'
  },
  filterOptionsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    padding: 16,
    marginLeft: 16,
    backgroundColor: 'red'
  },
  filterItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterButton: {
    width: 25,
    height: 25,
    borderRadius: 100,
    backgroundColor: "blue",
    marginRight: 16
  },
  shuffleContainer: {
    alignSelf: 'center',
    position: 'absolute',
    right: 32
  }
});