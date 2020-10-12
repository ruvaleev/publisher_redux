import React from 'react';
import './assets/main.css';
import TableOfContents from './components/pages/TableOfContents';

const App = (props) => (
  <div className="flex flex col h-screen items-center justify-center bg-gray-200 text-gray-500">
    <TableOfContents/>
  </div>
);

export default App;
