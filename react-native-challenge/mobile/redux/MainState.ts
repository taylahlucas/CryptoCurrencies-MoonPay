import { createSlice } from '@reduxjs/toolkit';
import { CurrencyItem, FilterOptions, SortOptions } from '../utils/CustomInterfaces';

export interface MainState {
  readonly currencyData: CurrencyItem[];
  readonly filteredCurrencyData: CurrencyItem[];
  readonly filterOptions: FilterOptions;
  readonly sortOptions: SortOptions;
  readonly isTablet: boolean;
}

export const initialState: MainState = {
  currencyData: [],
  filteredCurrencyData: [],
  filterOptions: {
    supportedInUS: true,
    supportedInTest: true
  },
  sortOptions: {
    code: 'none',
    name: 'none'
  },
  isTablet: false
}

const slice = createSlice({
  name: 'main',
  initialState: initialState,
  reducers: {
    setCurrencyData: (state, action) => {
      state.currencyData = action.payload;
    },
    setFilteredCurrencyData: (state, action) => {
      state.filteredCurrencyData = action.payload;
    },
    setFilterOptions: (state, action) => {
      state.filterOptions = action.payload;
    },
    setSortOptions: (state, action) => {
      state.sortOptions = action.payload;
    },
    setIsTablet: (state, action) => {
      state.isTablet = action.payload;
    }
  }
});

export const {
  setCurrencyData,
  setFilteredCurrencyData,
  setFilterOptions,
  setSortOptions,
  setIsTablet
} = slice.actions;

export default slice.reducer;