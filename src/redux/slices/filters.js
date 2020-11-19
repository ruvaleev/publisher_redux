import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 'SHOW_ALL' };

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    showAll(state, action) {
      return { value: 'SHOW_ALL' }
    },
    showUncompleted(state, action) {
      return { value: 'SHOW_UNCOMPLETED' }
    },
    showCompleted(state, action) {
      return { value: 'SHOW_COMPLETED' }
    }
  }
})

export const { showAll, showUncompleted, showCompleted } = filtersSlice.actions;
export default filtersSlice.reducer;
