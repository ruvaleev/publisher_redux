import { createSlice } from '@reduxjs/toolkit';

const initialState = { title: 'Show All', value: 'SHOW_ALL' };

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    showAll(state, action) {
      return { title: 'Show All', value: 'SHOW_ALL' }
    },
    showUncompleted(state, action) {
      return { title: 'Show Uncompleted', value: 'SHOW_UNCOMPLETED' }
    },
    showCompleted(state, action) {
      return { title: 'Show Completed', value: 'SHOW_COMPLETED' }
    }
  }
})

export const { showAll, showUncompleted, showCompleted } = filtersSlice.actions;
export default filtersSlice.reducer;
