import { booksActions } from "../actionTypes/books";

const initialState = {editable: false};

export const booksReducer = function (state = initialState, action) {
  switch (action.type) {
    case booksActions.TOGGLE_EDITABLE :
      return !state;
    default:
      return state;
  }
};
