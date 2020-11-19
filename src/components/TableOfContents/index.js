import { connect } from 'react-redux';
import TableOfContents from './TableOfContents';

const mapStateToProps = (state) => ({
  isLoading: state.booksReducer.present.isLoading,
  books: state.booksReducer.present.books
})

export default connect(mapStateToProps)(TableOfContents);
