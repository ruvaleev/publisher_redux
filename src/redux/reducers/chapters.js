import { chaptersActions } from "../actionTypes/chapters";

const initialState = [{id: 0, title: '', ready: false}];

export const chaptersReducer = function (state = initialState, action) {
  switch (action.type) {
    case chaptersActions.TOGGLE_READY :
      return state.map(
        (chapter, id) => (
          id === action.id
            ? { ...chapter, ready: !chapter.ready }
            : chapter
        )
      );
    default:
      return state;
  }
};
