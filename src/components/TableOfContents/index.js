import { connect } from 'react-redux';
import TableOfContents from './TableOfContents';

const mapStateToProps = (state) => ({
  books: state.booksReducer.books
})

export default connect(mapStateToProps)(TableOfContents);
