import React from 'react';
import './assets/main.css';
import TableOfContents from './components/TableOfContents';
import StatisticCard from './components/StatisticCard';

import { Provider } from 'react-redux';
import createStore from './redux/store';
import { fetchBooks } from './redux/slices/books';

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;
const store = createStore(preloadedState);

const onLoad = (store) => {
  const promises = [];
  promises.push(
    store.dispatch(fetchBooks())
  );

  return Promise.all(promises);
}

class App extends React.Component {
  componentDidMount() {
    if (process.env.NODE_ENV !== 'production')
      onLoad(store);
  }
  
  render() {
    return (
      <Provider store={store}>
        <div className="flex flex col h-screen items-start justify-center bg-gray-200 text-gray-500 pt-30vh">
          <TableOfContents/>
          <StatisticCard/>
        </div>
      </Provider>
    )
  }
}

export default App;
