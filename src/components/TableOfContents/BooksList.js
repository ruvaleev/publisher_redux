import React from 'react';

import Book from '../BookCard';

function BooksList ({books}) {
  return (
    books.map((book, i) => (
      <Book key={book._id} book={book}/>
    ))
  )
}

export default BooksList;
