import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './reducers';
import APIMiddleware from './middleware/API';

export default (preloadedState) => configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(APIMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState
});
