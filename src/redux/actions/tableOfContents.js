import { tableOfContentsActions } from '../actionTypes/tableOfContents';

export const toggleEditable = (editable) => ({
  editable,
  type: tableOfContentsActions.TOGGLE_EDITABLE
})
