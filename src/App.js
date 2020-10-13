import React from 'react';
import './assets/main.css';
import TableOfContents from './components/TableOfContents';

import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="flex flex col h-screen items-center justify-center bg-gray-200 text-gray-500">
        <TableOfContents/>
      </div>
    </Provider>
  )
}

export default App;
