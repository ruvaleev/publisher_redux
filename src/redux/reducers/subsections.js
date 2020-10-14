import { subsectionsActions } from "../actionTypes/subsections";

const initialState = [{id: 0, title: '', ready: false}];

export const subsectionsReducer = function (state = initialState, action) {
  switch (action.type) {
    case subsectionsActions.TOGGLE_READY :
      return state.map(
        (subsection, id) => (
          id === action.id
            ? { ...subsection, ready: !subsection.ready }
            : subsection
        )
      );
    case subsectionsActions.ADD_SUBSECTION :
      return state.concat({ id: state.length, title: action.title, ready: false })
    default:
      return state;
  }
};
