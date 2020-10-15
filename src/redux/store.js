import { createStore } from 'redux';

import rootReducer from './reducers';
import books from './books.json';

const store = createStore(
  rootReducer,
  { booksReducer: { books: books } },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
