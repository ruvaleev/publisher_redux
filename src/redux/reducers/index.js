import { combineReducers } from 'redux';
import undoable from 'redux-undo';

import { booksReducer } from './books';
import { filtersReducer } from './filters';
import { tableOfContentsReducer } from './tableOfContents';

export default combineReducers(
  {
    booksReducer: undoable(booksReducer),
    filtersReducer,
    tableOfContentsReducer
  }
);
