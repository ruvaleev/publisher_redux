import React from 'react';
import './assets/main.css';
import TableOfContents from './components/TableOfContents';
import StatisticCard from './components/StatisticCard';

import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="flex flex col h-screen items-start justify-center bg-gray-200 text-gray-500 pt-30vh">
        <TableOfContents/>
        <StatisticCard/>
      </div>
    </Provider>
  )
}

export default App;
