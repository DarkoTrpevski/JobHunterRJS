import React from 'react';
//Redux
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <Provider store = {store}>
      <div className = "App">
        <h1>Hello World</h1>
      </div>
    </Provider>
  );
}

export default App;