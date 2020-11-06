import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './reducers';
import APIMiddleware from './middleware/API';

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(APIMiddleware),
  devTools: process.env.NODE_ENV !== 'production'
});

export default store;
