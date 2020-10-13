import { booksActions } from '../actionTypes/books';

export const toggleEditable = (editable) => ({
  editable,
  type: booksActions.TOGGLE_EDITABLE
})
