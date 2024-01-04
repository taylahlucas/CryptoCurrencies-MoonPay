import React from 'react';
import { render as rtlRender, RenderAPI } from '@testing-library/react-native';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import reducer from '@redux/reducer';

interface WrapperProps {
  children: any;
}

export const render = (
  ui: any,
  { initialState, store = configureStore({ reducer, preloadedState: initialState }), ...renderOptions }: any = {}
): RenderAPI => {
  const wrapper = ({ children }: WrapperProps): JSX.Element => {
    return (
      <Provider store={store}>{children}</Provider>
    );
  };
  return rtlRender(ui, { wrapper, ...renderOptions });
};

export * from '@testing-library/react-native';
