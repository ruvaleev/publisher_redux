import { createSlice } from '@reduxjs/toolkit';

const initialState = { editable: false };

const tableOfContentsSlice = createSlice({
  name: 'tableOfContents',
  initialState,
  reducers: {
    toggleEditable(state, action) {
      console.log('state in toogle editable')
      console.log(state.editable)
      return {
        ...state,
        editable: !state.editable
      };
    }
  }
})

export const { toggleEditable } = tableOfContentsSlice.actions;
export default tableOfContentsSlice.reducer;
