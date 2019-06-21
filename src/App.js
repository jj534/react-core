import React from 'react';
import Store from './redux/store';
import {Provider} from 'react-redux';
import Counter from './components/Counter';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

const persistor = persistStore(Store)

class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <PersistGate loading={null} persistor={persistor}>
          <Counter />
        </PersistGate>
      </Provider>
      )
  }
}

export default App;
