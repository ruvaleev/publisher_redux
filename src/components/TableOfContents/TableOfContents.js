import React from 'react';

import BooksList from './BooksList';
import Menu from './Menu';

function TableOfContents ({isLoading, isError, error, books}) {
  return (
    <>
      <Menu/>
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
