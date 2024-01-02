import { Dispatch } from 'redux';
import { 
  setCurrencyData,
  setFilteredCurrencyData,
  setFilterOptions,
  setSortOptions
} from '../MainState';
import { useAppDispatch } from '../store';
import { CurrencyItem, FilterOptions, SortOptions } from '../../utils/CustomInterfaces';

interface MainDispatch {
  setCurrencyData: (value: CurrencyItem[]) => void;
  setFilteredCurrencyData: (value: CurrencyItem[]) => void;
  setFilterOptions: (value: FilterOptions) => void;
  setSortOptions: (value: SortOptions) => void;
}

const useMainDispatch = (): MainDispatch => {
  const dispatch: Dispatch = useAppDispatch();

  return {
    setCurrencyData(value: CurrencyItem[]): void {
      dispatch(setCurrencyData(value));
    },
    setFilteredCurrencyData(value: CurrencyItem[]): void {
      dispatch(setFilteredCurrencyData(value));
    },
    setFilterOptions(value: FilterOptions): void {
      dispatch(setFilterOptions(value));
    },
    setSortOptions(value: SortOptions): void {
      dispatch(setSortOptions(value));
    }
  }
}

export default useMainDispatch;
