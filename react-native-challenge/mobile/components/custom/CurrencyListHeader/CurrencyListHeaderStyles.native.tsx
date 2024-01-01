import { StyleSheet } from 'react-native';
import { DEFAULT_MARGIN } from '../../../utils/Constants';

export const styles = StyleSheet.create({
  headerContainer: {
    height: 140,
    marginTop: DEFAULT_MARGIN,
    flexDirection: 'row'
  },
  filterOptionsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    padding: DEFAULT_MARGIN,
    marginLeft: DEFAULT_MARGIN,
  },
  sortOptionsContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  sortOptionsItem: {
    width: 100,
    marginLeft: 24
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
    marginRight: DEFAULT_MARGIN
  },
  shuffleContainer: {
    alignSelf: 'center',
    position: 'absolute',
    right: DEFAULT_MARGIN * 2
  }
});