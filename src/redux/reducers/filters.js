import { filtersActions } from "../actionTypes/filters";

const initialState = filtersActions.SHOW_ALL;

export const filtersReducer = function (state = initialState, action) {
  switch (action.type) {
    case filtersActions.SHOW_ALL:
      return filtersActions.SHOW_ALL
    case filtersActions.SHOW_UNCOMPLETED:
      return filtersActions.SHOW_UNCOMPLETED
    case filtersActions.SHOW_COMPLETED:
      return filtersActions.SHOW_COMPLETED
    default :
      return state
  }
};
