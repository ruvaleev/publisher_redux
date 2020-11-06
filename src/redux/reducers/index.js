import { combineReducers } from 'redux';
import undoable from 'redux-undo';

import booksReducer from '../slices/books';
import filtersReducer from '../slices/filters';
import tableOfContentsReducer from '../slices/tableOfContents';

export default combineReducers(
  {
    booksReducer: undoable(booksReducer),
    filtersReducer,
    tableOfContentsReducer
  }
);
