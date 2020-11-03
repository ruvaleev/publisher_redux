import React from 'react';

import BooksList from './BooksList';
import Menu from './Menu';

function TableOfContents ({isLoading, books, undo, redo}) {
  return (
    <>
      <Menu undo={undo} redo={redo}/>
      {
        isLoading
          ? <div>Loading...</div>
          : <BooksList books={books}/>
      }
    </>
    )
}

export default TableOfContents;
