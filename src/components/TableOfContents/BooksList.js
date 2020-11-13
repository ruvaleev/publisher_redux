import React from 'react';

import BookCard from '../BookCard';

function BooksList ({books}) {
  return (
    books.map((book, i) => (
      <BookCard key={book._id} book={book}/>
    ))
  )
}

export default BooksList;
