import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

if (process.env.NODE_ENV === 'development') {
  require('mocks');
}

if (process.env.NODE_ENV === 'production') {
  ReactDOM.hydrate(
    <App/>,
    document.getElementById('bookList')
  );
} else {
  ReactDOM.render(
    <App/>,
    document.getElementById('bookList')
  )
}
