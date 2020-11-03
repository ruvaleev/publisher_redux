import React from 'react';

import BookStatisticCard from './BookStatisticCard';

const StatisticCard = ({books}) => {
  return (
    books.length == 0 ||
      <div>
        <h2 className='text-xl'>Books Statistic</h2>
        {books.map((book, i) => {
          return <BookStatisticCard key={'statistic_' + i} book={book}/>
        })}
      </div>
  )
}

export default StatisticCard;
