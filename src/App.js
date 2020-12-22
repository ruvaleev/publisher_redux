import React from 'react';
import './assets/main.css';
import TableOfContents from './components/TableOfContents';
import StatisticCard from './components/StatisticCard';

import { Provider } from 'react-redux';
import store from './redux/store';
import { fetchBooks } from './redux/slices/books';

store.dispatch(fetchBooks());

const onLoad = () => {
  const promises = [];
  promises.push(fetchBooks());

  return Promise.all(promises);
}

class App extends React.Component {
  componentDidMount() {
    if (process.env.NODE_ENV !== 'production')
      onLoad();
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
