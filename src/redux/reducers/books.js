import { createReducer } from '@reduxjs/toolkit';

import { booksActions } from '../actionTypes/books';

const initialState = []

export const booksReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(booksActions.ADD_CHAPTER, (state, action) => {
      let book = state.books.find((book) => { return book.id == action.bookId })
      book.chapters = book.chapters.concat({ id: book.chapters.length, title: action.title, subsections: [] })
    })
    .addCase(booksActions.ADD_SUBSECTION, (state, action) => {
      let book = state.books.find((book) => { return book.id == action.bookId })
      let chapter = book.chapters.find((chapter) => { return chapter.id == action.chapterId })
      chapter.subsections =
        chapter.subsections.concat({ id: chapter.subsections.length, title: action.title, ready: false })
    })
    .addCase(booksActions.TOGGLE_SUBSECTION_READY, (state, action) => {
      let book = state.books.find((book) => { return book.id == action.bookId })
      let chapter = book.chapters.find((chapter) => { return chapter.id == action.chapterId })
      let subsection = chapter.subsections.find((subsection) => { return subsection.id == action.subsectionId })
      subsection.ready = !subsection.ready
    })
    .addDefaultCase((state, action) => state)

})
