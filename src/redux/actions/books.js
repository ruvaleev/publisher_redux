import { booksActions } from '../actionTypes/books';

export const addChapter = ({bookId, title}) => ({
  bookId,
  title,
  type: booksActions.ADD_CHAPTER
})

export const addSubsection = ({bookId, chapterId, title}) => ({
  bookId,
  chapterId,
  title,
  type: booksActions.ADD_SUBSECTION
})

export const toggleReadySubsection = ({bookId, chapterId, subsectionId}) => ({
  bookId,
  chapterId,
  subsectionId,
  type: booksActions.TOGGLE_SUBSECTION_READY
})
