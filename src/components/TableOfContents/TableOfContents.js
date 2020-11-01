import React from 'react';

import BooksList from './BooksList';
import Menu from './Menu';

function TableOfContents ({books, undo, redo}) {
  return (
    <>
      <Menu undo={undo} redo={redo}/>
      <BooksList books={books}/>
    </>
    )
}

export default TableOfContents;
