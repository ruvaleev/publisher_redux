import React from 'react';

import Title from '../shared/Title';
import ChaptersList from '../ChaptersCard';

function SubsectionForm ({onSubmit, title, className}) {
  return (
    <td className={className}>
      <form onSubmit={onSubmit}>
        <input type='text' name='title' className='mr-4'/>
        <button>{title}</button>
      </form>
    </td>
  )
}

const BookCard = ({book, chapterAdd, editable}) => {
  return (
    <table className='mx-12'>
      <thead><tr><Title title={book.title} className='p-2 text-xl'/></tr></thead>
      <tbody className='flex flex-col'>
        <ChaptersList bookId={book._id}/>
        <tr>
          {
            editable &&
              <SubsectionForm
                onSubmit={(e) => {
                  e.preventDefault();
                  chapterAdd({bookId: book._id, title: e.target.title.value });
                  e.target.title.value = '';
                }}
                title='Add chapter'
                className='pt-4'/>
          }
        </tr>
      </tbody>
    </table>
  )
}

export default BookCard;
