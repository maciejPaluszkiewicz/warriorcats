import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';
import WarriorCats from './components/WarriorCats'

function App() {
  return (
    <Provider store={store}>
      <WarriorCats />
    </Provider>
  );
}

export default App;
