import React from 'react';
import { Provider } from "react-redux";
import Router from './src/routes';
import { persistor, store } from './src/redux/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

export default () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <IconRegistry icons={EvaIconsPack} />
      <Router />
    </PersistGate>
  </Provider>
);