import { tableOfContentsActions } from "../actionTypes/tableOfContents";

const initialState = { editable: false };

export const tableOfContentsReducer = function (state = initialState, action) {
  switch (action.type) {
    case tableOfContentsActions.TOGGLE_EDITABLE :
      return {
        ...state,
        editable: !state.editable
      };
    default:
      return state;
  }
};
