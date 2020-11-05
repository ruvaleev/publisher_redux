import { configureStore } from '@reduxjs/toolkit';
// import { createStore, compose, applyMiddleware } from 'redux';

import rootReducer from './reducers';
import APIMiddleware from './middleware/API';

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//   rootReducer,
//   composeEnhancer(
//     applyMiddleware(APIMiddleware)
//   )
// );

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(APIMiddleware),
  devTools: process.env.NODE_ENV !== 'production'
});

export default store;
