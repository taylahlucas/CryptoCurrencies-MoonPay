import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView } from 'react-native';
import Currencies from './mobile/screens/Currencies.native';
import configureStore from './mobile/redux/store';

const store = configureStore;

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Currencies />
      </SafeAreaView>
    </Provider>
  );
}