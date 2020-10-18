import React from 'react';

import BooksList from './BooksList';
import Menu from './Menu';

function TableOfContents ({books}) {
  return (
    <>
      <Menu/>
      <BooksList books={books}/>
    </>
    )
}

export default TableOfContents;
