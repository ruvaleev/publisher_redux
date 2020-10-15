import React from 'react';

import Book from '../Book';
import { connect } from 'react-redux';
import { addChapter, addSubsection, toggleReadySubsection } from '../../redux/actions/books';
import { toggleEditable } from '../../redux/actions/tableOfContents';

class TableOfContents extends React.Component {
  render() {
    const editable = this.props.editable
    return (
      <>
        <button onClick={() => this.props.bookToggleEditable(editable)}>Edit</button>
        {this.props.books.map((book, i) => (
          <Book
            key={`book_${book.id}`}
            book={book}
            editable={editable}
            chapterAdd={this.props.chapterAdd}
            subsectionAdd={this.props.subsectionAdd}
            readySubsectionToggle={this.props.readySubsectionToggle}/>
        ))}
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  editable: state.tableOfContentsReducer.editable,
  books: state.booksReducer.books
})

const mapDispatchToProps = (dispatch) => ({
    bookToggleEditable: (editable) => dispatch(toggleEditable(editable)),
    chapterAdd: (data) => dispatch(addChapter(data)),
    subsectionAdd: (data) => dispatch(addSubsection(data)),
    readySubsectionToggle: (data) => dispatch(toggleReadySubsection(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(TableOfContents);
