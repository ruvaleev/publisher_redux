import { connect } from 'react-redux';

import SubsectionsList from './SubsectionsList';
import { toggleSubsectionReady } from '../../redux/slices/books';

const filters = {
  SHOW_ALL: () => true,
  SHOW_COMPLETED: subsection => subsection.ready,
  SHOW_UNCOMPLETED: subsection => !subsection.ready
};

function selectSubsections (books, currentFilter, bookId, chapterId) {
  console.log('books')
  console.log(books)
  console.log('bookId')
  console.log(bookId)
  let book = books.find((book) => { return book._id == bookId })
  let chapter = book.chapters.find((chapter) => { return chapter.id == chapterId })
  return chapter.subsections.filter(filters[currentFilter])
}

const mapStateToProps = (state, ownProps) => ({
  subsections: selectSubsections(
    state.booksReducer.present.books, state.filtersReducer.value, ownProps.bookId, ownProps.chapterId
  ),
  editable: state.tableOfContentsReducer.editable
})

const mapDispatchToProps = (dispatch) => ({
  readySubsectionToggle: (data) => dispatch(toggleSubsectionReady(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(SubsectionsList);
