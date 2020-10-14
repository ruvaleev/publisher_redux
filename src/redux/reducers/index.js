import { combineReducers } from 'redux';

import { booksReducer } from './books';
import { chaptersReducer } from './chapters';
import { subsectionsReducer } from './subsections';

export default combineReducers(
  {
    booksReducer,
    chaptersReducer,
    subsectionsReducer
  }
);
