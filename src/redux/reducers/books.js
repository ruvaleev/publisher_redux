import { booksActions } from '../actionTypes/books';

export const booksReducer = function (state = [], action) {
  switch (action.type) {
    case booksActions.ADD_CHAPTER :
      return { books: state.books.map(
        (book) => (
          book.id == action.bookId
            ? {
                ...book,
                chapters: book.chapters.concat(
                  { id: book.chapters.length, title: action.title, subsections: [] }
                )
              }
            : book
        )
      )};
    case booksActions.ADD_SUBSECTION :
      return { books: state.books.map(
        (book) => (
          book.id == action.bookId
            ? {...book, chapters: book.chapters.map(
                (chapter) => (
                  chapter.id == action.chapterId
                  ? {
                      ...chapter,
                      subsections: chapter.subsections.concat(
                        { id: chapter.subsections.length, title: action.title, ready: false }
                      )
                    }
                  : chapter
                )
              )}
            : book
        )
      )};
    case booksActions.TOGGLE_SUBSECTION_READY :
      return { books: state.books.map(
        (book) => (
          book.id == action.bookId
            ? {...book, chapters: book.chapters.map(
                (chapter) => (
                  chapter.id == action.chapterId
                  ? {
                      ...chapter, subsections: chapter.subsections.map(
                        (subsection) => (
                          subsection.id == action.subsectionId
                          ? { ...subsection, ready: !subsection.ready }
                          : subsection
                        )
                      )
                    }
                  : chapter
                )
              )}
            : book
        )
      )};
    default:
      return state;
  }
};
