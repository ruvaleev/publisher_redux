import { connect } from 'react-redux';

import BookCard from './BookCard';
import { addChapter } from '../../redux/slices/books';

const mapStateToProps = (state) => ({
  editable: state.tableOfContentsReducer.editable
})

const mapDispatchToProps = (dispatch) => ({
  chapterAdd: (data) => dispatch(addChapter(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(BookCard);
