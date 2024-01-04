import React from 'react';
import { render } from '@utils/TestLibraryUtils.native';
import { initialState as mainState } from '@redux/MainState';
import { mockCurrencyData } from '../__mocks__/CurrencyList';
import CurrencyList from '../CurrencyList.native';

describe('CurrencyList', () => {
  afterEach(() => {
    jest.clearAllMocks();
  })

  it('renders the unfiltered data', () => {
    const initialState = {
      main: {
        ...mainState,
        currencyData: mockCurrencyData,
        filteredCurrencyData: mockCurrencyData,
        filterOptions: null
      } 
    };
    const { queryByTestId } = render(<CurrencyList />, { initialState });

    mockCurrencyData.forEach(currency => {
      expect(queryByTestId(`currency-${currency.id}`)).toBeTruthy();
    });
  });

  it('renders data filtered by supportedInUS & supportedInTest', () => {
    const initialState = {
      main: {
        ...mainState,
        currencyData: mockCurrencyData,
        filteredCurrencyData: mockCurrencyData
      } 
    };

    const { queryByTestId } = render(<CurrencyList />, { initialState });

    mockCurrencyData.forEach(currency => {
      if (currency.supportedInUS && currency.supportedInTest) {
        expect(queryByTestId(`currency-${currency.id}`)).toBeTruthy();
      }
    });
  });

  it('renders data filtered by not supportedInUS & supportedInTest', () => {
    const initialState = {
      main: {
        ...mainState,
        currencyData: mockCurrencyData,
        filteredCurrencyData: mockCurrencyData,
        filterOptions: {
          supportedInUS: false,
          supportedInTest: true
        }
      } 
    };

    const { queryByTestId } = render(<CurrencyList />, { initialState });

    mockCurrencyData.forEach(currency => {
      if (!currency.supportedInUS && currency.supportedInTest) {
        expect(queryByTestId(`currency-${currency.id}`)).toBeTruthy();
      }
    });
  });

  it('renders data filtered by supportedInUS & not supportedInTest', () => {
    const initialState = {
      main: {
        ...mainState,
        currencyData: mockCurrencyData,
        filteredCurrencyData: mockCurrencyData,
        filterOptions: {
          supportedInUS: true,
          supportedInTest: false
        }
      } 
    };

    const { queryByTestId } = render(<CurrencyList />, { initialState });

    mockCurrencyData.forEach(currency => {
      if (currency.supportedInUS && !currency.supportedInTest) {
        expect(queryByTestId(`currency-${currency.id}`)).toBeTruthy();
      }
    });
  });

  it('renders data filtered by not supportedInUS & not supportedInTest', () => {
    const initialState = {
      main: {
        ...mainState,
        currencyData: mockCurrencyData,
        filteredCurrencyData: mockCurrencyData,
        filterOptions: {
          supportedInUS: false,
          supportedInTest: false
        }
      } 
    };

    const { queryByTestId } = render(<CurrencyList />, { initialState });

    mockCurrencyData.forEach(currency => {
      if (!currency.supportedInUS && !currency.supportedInTest) {
        expect(queryByTestId(`currency-${currency.id}`)).toBeTruthy();
      }
    });
  });
})