import React from 'react';
import { connect } from 'react-redux';

import Chapter from './Chapter';
import isReady from '../shared/isReady';

function ChaptersList ({bookId, chapters}) {
  return (
    chapters.map((chapter, i) => (
      <Chapter key={chapter.id} chapter={chapter} bookId={bookId}/>
    ))
  )
}

const filters = {
  SHOW_ALL: () => true,
  SHOW_COMPLETED: chapter => isReady(chapter),
  SHOW_UNCOMPLETED: chapter => !isReady(chapter)
};

function selectChapters (books, bookId, currentFilter) {
  let book = books.find((book) => { return book.id == bookId })
  return book.chapters.filter(filters[currentFilter])
}

const mapStateToProps = (state, ownProperty) => ({
  chapters: selectChapters(state.booksReducer.books, ownProperty.bookId, state.filtersReducer.value)
})

const mapDispatchToProps = (dispatch) => ({
  addSubsection: (data) => dispatch(addSubsection(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChaptersList);
