import React from 'react';

import BooksList from './BooksList';
import Menu from './Menu';

function TableOfContents ({books, editable, chapterAdd, subsectionAdd}) {
  return (
    <>
      <Menu/>
      <BooksList books={books} editable={editable} chapterAdd={chapterAdd} subsectionAdd={subsectionAdd}/>
    </>
    )
}

export default TableOfContents;
