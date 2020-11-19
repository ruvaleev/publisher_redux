import { connect } from 'react-redux';

import Book from './Book';
import { addChapter } from '../../redux/slices/books';

const mapStateToProps = (state) => ({
  editable: state.tableOfContentsReducer.editable
})

const mapDispatchToProps = (dispatch) => ({
  chapterAdd: (data) => dispatch(addChapter(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Book);
