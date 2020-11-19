import React from 'react';

import Title from '../shared/Title';
import ChaptersList from '../ChaptersCard';
import ChapterForm from './ChapterForm';

const Book = ({book, chapterAdd, editable}) => {
  return (
    <table className='mx-12'>
      <thead><tr><Title title={book.title} className='p-2 text-xl'/></tr></thead>
      <tbody className='flex flex-col'>
        <ChaptersList bookId={book._id}/>
        <tr>
          {
            editable &&
              <ChapterForm
                onSubmit={data => {chapterAdd({bookId: book._id, title: data})}}
                title='Add chapter'
                className='pt-4'/>
          }
        </tr>
      </tbody>
    </table>
  )
}

export default Book;
