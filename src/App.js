import React from 'react';
import Store from './redux/store';
import {Provider} from 'react-redux';
import Counter from './components/Counter';

class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <Counter />
      </Provider>
      )
  }
}

export default App;
