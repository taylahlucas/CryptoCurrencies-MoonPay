import { MainState } from '@redux/MainState';
import { SortOptionOrder } from './CustomTypes';

export interface CurrencyItem {
  id: number;
  code: string;
  name: string;
  supportedInUS: boolean;
  supportedInTest: boolean;
}

export interface SortOptions {
  code: SortOptionOrder;
  name: SortOptionOrder;
}

export interface FilterOptions {
  supportedInUS: boolean;
  supportedInTest: boolean;
}

export interface StoreState {
  main: MainState;
}
