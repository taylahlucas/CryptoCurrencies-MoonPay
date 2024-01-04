import React from 'react';
import { render, fireEvent } from '@utils/TestLibraryUtils.native';
import { initialState as mainState } from '@redux/MainState';
import CurrencyTableFilterOptions from '../CurrencyTableFilterOptions.native';
import * as MainState from '@redux/MainState';

describe('CurrencyTableFilterOptions', () => {
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
    const { queryByTestId } = render(<CurrencyTableFilterOptions />, { initialState });

    expect(queryByTestId('supported-in-US')).toBeTruthy();
    expect(queryByTestId('supported-in-Test')).toBeTruthy();
  });

  test('toggles supportedInUS when clicked', () => {

    const { queryByTestId } = render(<CurrencyTableFilterOptions />, { initialState });

    const supportedInUSButton = queryByTestId('supported-in-US');
    fireEvent.press(supportedInUSButton);

    expect(MainState.setFilterOptions).toHaveBeenCalledWith({ 
      supportedInTest: false,
      supportedInUS: true
    });
  });

  test('toggles supportedInTest when clicked', () => {
    const { queryByTestId } = render(<CurrencyTableFilterOptions />, { initialState });

    const supportedInTestButton = queryByTestId('supported-in-Test');
    fireEvent.press(supportedInTestButton);

    expect(MainState.setFilterOptions).toHaveBeenCalledWith({
      supportedInTest: true,
      supportedInUS: false
    });
  });
})