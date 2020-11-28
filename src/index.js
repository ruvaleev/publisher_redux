import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

if (process.env.NODE_ENV === 'development') {
  require('mocks');
}

ReactDOM.render(
  <App/>,
  document.getElementById('bookList')
)
