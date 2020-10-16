import React from 'react';
import { connect } from 'react-redux';

import Title from '../shared/Title';
import TitleForm from '../shared/TitleForm';
import ChaptersList from './ChaptersList';
import { addChapter } from '../../redux/actions/books';

  const BookCard = ({book, chapterAdd, editable}) => {
  return (
    <table className='mx-12'>
      <thead><tr><Title title={book.title} className='p-2 text-xl'/></tr></thead>
      <tbody className='flex flex-col'>
        <ChaptersList chapters={book.chapters} bookId={book.id}/>
        <tr>
          {
            editable &&
              <TitleForm
                title='Add chapter'
                bookId={book.id}
                dispatch={chapterAdd}
                className='pt-4'/>
          }
        </tr>
      </tbody>
    </table>
  )
}

const mapStateToProps = (state) => ({
  editable: state.tableOfContentsReducer.editable
})

const mapDispatchToProps = (dispatch) => ({
  chapterAdd: (data) => dispatch(addChapter(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(BookCard);
