import React from 'react';

const BookStatisticCard = ({book}) => {
  return (
    <div className='py-4'>
      <div>{book.title}</div>
      <div>Total Subsections Count {book.subsectionsCount}</div>
      <div>Ready Subsections {book.readySubsectionsCount}</div>
      <div>Total Chapters Count {book.totalChaptersCount}</div>
      <div>Ready Chapters {book.readyChaptersCount}</div>
      <div>{book.readyStatus}</div>
    </div>
  )
}

export default BookStatisticCard;
