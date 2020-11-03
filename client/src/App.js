import React from 'react';
//Redux
import { Provider } from 'react-redux';
import store from './redux/store';
//Components
import Header from './components/Header/Header';
//Import Routes
import Routes from './Routes/Routes';

const App = () => {
  return (
    <Provider store = {store}>
      <div className = "App">
        <Header/>
        <Routes />
      </div>
    </Provider>
  );
}

export default App;