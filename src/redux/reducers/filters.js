import { filtersActions } from "../actionTypes/filters";

const initialState = { title: 'Show All', value: filtersActions.SHOW_ALL };

export const filtersReducer = function (state = initialState, action) {
  switch (action.type) {
    case filtersActions.SHOW_ALL:
      return { title: 'Show All', value: filtersActions.SHOW_ALL }
    case filtersActions.SHOW_UNCOMPLETED:
      return { title: 'Show Uncompleted', value: filtersActions.SHOW_UNCOMPLETED }
    case filtersActions.SHOW_COMPLETED:
      return { title: 'Show Completed', value: filtersActions.SHOW_COMPLETED }
    default :
      return state
  }
};
