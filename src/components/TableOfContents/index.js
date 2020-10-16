import { connect } from 'react-redux';
import { addChapter, addSubsection } from '../../redux/actions/books';
import TableOfContents from './TableOfContents';

const mapStateToProps = (state) => ({
  editable: state.tableOfContentsReducer.editable,
  books: state.booksReducer.books
})

const mapDispatchToProps = (dispatch) => ({
    chapterAdd: (data) => dispatch(addChapter(data)),
    subsectionAdd: (data) => dispatch(addSubsection(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(TableOfContents);
