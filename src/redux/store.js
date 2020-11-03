import { createStore, compose, applyMiddleware } from 'redux';

import rootReducer from './reducers';
import APIMiddleware from './middleware/API';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(
    applyMiddleware(APIMiddleware)
  )
);

export default store;
