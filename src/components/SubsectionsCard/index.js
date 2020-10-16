import { connect } from 'react-redux';

import SubsectionsList from './SubsectionsList';
import { toggleReadySubsection } from '../../redux/actions/books';

const filters = {
  SHOW_ALL: () => true,
  SHOW_COMPLETED: subsection => subsection.ready,
  SHOW_UNCOMPLETED: subsection => !subsection.ready
};

function fetchSubsections(books, currentFilter, bookId, chapterId) {
  let book = books.find((book) => { return book.id == bookId })
  let chapter = book.chapters.find((chapter) => { return chapter.id == chapterId })
  return chapter.subsections.filter(filters[currentFilter])
}

const mapStateToProps = (state, ownProps) => ({
  subsections: fetchSubsections(
    state.booksReducer.books, state.filtersReducer.value, ownProps.bookId, ownProps.chapterId
  ),
  editable: state.tableOfContentsReducer.editable
})

const mapDispatchToProps = (dispatch) => ({
  readySubsectionToggle: (data) => dispatch(toggleReadySubsection(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(SubsectionsList);
