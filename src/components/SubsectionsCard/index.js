import { connect } from 'react-redux';

import SubsectionsList from './SubsectionsList';

const filters = {
  SHOW_ALL: () => true,
  SHOW_COMPLETED: subsection => subsection.ready,
  SHOW_UNCOMPLETED: subsection => !subsection.ready
};

function selectSubsections (books, currentFilter, bookId, chapterId) {
  let book = books.find((book) => { return book._id == bookId })
  let chapter = book.chapters.find((chapter) => { return chapter.id == chapterId })
  return chapter.subsections.filter(filters[currentFilter])
}

const mapStateToProps = (state, ownProps) => ({
  subsections: selectSubsections(
    state.booksReducer.present.books, state.filtersReducer.value, ownProps.bookId, ownProps.chapterId
  )
})

export default connect(mapStateToProps)(SubsectionsList);
