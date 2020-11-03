import React from 'react';

import Title from '../shared/Title';
import TitleForm from '../shared/TitleForm';
import ChaptersList from '../ChaptersCard';

const BookCard = ({book, chapterAdd, editable}) => {
  return (
    <table className='mx-12'>
      <thead><tr><Title title={book.title} className='p-2 text-xl'/></tr></thead>
      <tbody className='flex flex-col'>
        <ChaptersList bookId={book._id}/>
        <tr>
          {
            editable &&
              <TitleForm
                title='Add chapter'
                bookId={book._id}
                dispatch={chapterAdd}
                className='pt-4'/>
          }
        </tr>
      </tbody>
    </table>
  )
}

export default BookCard;
