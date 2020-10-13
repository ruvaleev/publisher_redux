
import { connect } from 'react-redux';
import TableOfContents from './TableOfContents';

const mapStateToProps = (state) => ({
  todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (title) => dispatch({
    type: 'TOGGLE_TODO',
    title
  }),
  addTodo: (text) => dispatch({
    type: 'ADD_TODO',
    text
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(TableOfContents);
