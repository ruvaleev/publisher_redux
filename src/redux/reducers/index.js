import { combineReducers } from 'redux';

import { booksReducer } from './books';
import { filtersReducer } from './filters';
import { tableOfContentsReducer } from './tableOfContents';

export default combineReducers(
  {
    booksReducer,
    filtersReducer,
    tableOfContentsReducer
  }
);
