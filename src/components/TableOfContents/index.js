import { connect } from 'react-redux';
import { ActionCreators } from 'redux-undo';
import TableOfContents from './TableOfContents';

const mapStateToProps = (state) => ({
  isLoading: state.booksReducer.present.isLoading,
  books: state.booksReducer.present.books
})

const mapDispatchToProps = (dispatch) => ({
  undo: () => dispatch(ActionCreators.undo()),
  redo: () => dispatch(ActionCreators.redo())
})

export default connect(mapStateToProps, mapDispatchToProps)(TableOfContents);
