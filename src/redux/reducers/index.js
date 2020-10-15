import { combineReducers } from 'redux';

import { booksReducer } from './books';
import { tableOfContentsReducer } from './tableOfContents';

export default combineReducers(
  {
    booksReducer,
    tableOfContentsReducer
  }
);
