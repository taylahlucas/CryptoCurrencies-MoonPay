import React from 'react';
import { render, fireEvent } from '@utils/TestLibraryUtils.native';
import { initialState as mainState } from '@redux/MainState';
import CurrencyListFilterOptions from '../CurrencyListFilterOptions.native';
import * as MainState from '@redux/MainState';

describe('CurrencyListFilterOptions', () => {
  const initialState = {
    main: {
      ...mainState,
      filterOptions: {
        supportedInUS: false,
        supportedInTest: false,
      }
    }
  };

  beforeEach(() => {
    jest.clearAllMocks();

    jest.spyOn(MainState, 'setFilterOptions');
  });

  test('renders correctly', () => {
    const { queryByTestId } = render(<CurrencyListFilterOptions />, { initialState });

    expect(queryByTestId('supported-in-US')).toBeTruthy();
    expect(queryByTestId('supported-in-Test')).toBeTruthy();
  });

  test('toggles supportedInUS when clicked', () => {

    const { queryByTestId } = render(<CurrencyListFilterOptions />, { initialState });

    const supportedInUSButton = queryByTestId('supported-in-US');
    fireEvent.press(supportedInUSButton);

    expect(MainState.setFilterOptions).toHaveBeenCalledWith({ 
      supportedInTest: false,
      supportedInUS: true
    });
  });

  test('toggles supportedInTest when clicked', () => {
    const { queryByTestId } = render(<CurrencyListFilterOptions />, { initialState });

    const supportedInTestButton = queryByTestId('supported-in-Test');
    fireEvent.press(supportedInTestButton);

    expect(MainState.setFilterOptions).toHaveBeenCalledWith({
      supportedInTest: true,
      supportedInUS: false
    });
  });
})