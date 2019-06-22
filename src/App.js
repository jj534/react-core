import React from 'react';
import Store from './redux/store';
import {Provider} from 'react-redux';
import Home from './components/Home';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

const persistor = persistStore(Store)

class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <PersistGate loading={null} persistor={persistor}>
          <Home />
        </PersistGate>
      </Provider>
      )
  }
}

export default App;
