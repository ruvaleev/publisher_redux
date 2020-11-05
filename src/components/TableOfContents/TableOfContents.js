import React from 'react';

import BooksList from './BooksList';
import Menu from './Menu';

function TableOfContents ({isLoading, isError, error, books, undo, redo}) {
  return (
    <>
      <Menu undo={undo} redo={redo}/>
      {
        isLoading
          ? <div>Loading...</div>
          : 
          isError
            ? <div>{error}</div>
            : <BooksList books={books}/>
      }
    </>
    )
}

export default TableOfContents;
