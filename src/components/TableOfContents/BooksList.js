import React from 'react';

import Book from '../Book';

function BooksList ({books, editable, chapterAdd, subsectionAdd}) {
  return (
    books.map((book, i) => (
      <Book
        key={`book_${book.id}`}
        book={book}
        editable={editable}
        chapterAdd={chapterAdd}
        subsectionAdd={subsectionAdd}/>
    ))
  )
}

export default BooksList;
