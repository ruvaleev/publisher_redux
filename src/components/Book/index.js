import React, { useReducer } from 'react';

import { chaptersReducer } from '.../../redux/reducers/chapters';
import { booksReducer } from '.../../redux/reducers/books';
import { addChapter } from  '../../redux/actions/chapters';
import BookHead from './BookHead';
import TitleForm from '../shared/TitleForm';
import ChaptersList from './ChaptersList';

const Book = ({title, providedChapters}) => {
  const [chapters, chaptersDispatch] = useReducer(
    chaptersReducer, providedChapters
  )
  const [editable, booksDispatch] = useReducer(
    booksReducer, false
  )

  return (
    <table className='mx-12'>
      <BookHead title={title} booksDispatch={booksDispatch} editable={editable}/>
      <tbody className='flex flex-col'>
        <ChaptersList chapters={chapters} editable={editable}/>
        <tr>
          {
            editable &&
              <TitleForm
                title='Add chapter'
                dispatch={chaptersDispatch}
                dispatchCallback={addChapter}
                className='pt-4'/>
          }
        </tr>
      </tbody>
    </table>
  )
}

export default Book;
