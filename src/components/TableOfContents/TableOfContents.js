import React, { useReducer } from 'react';

import { chaptersReducer } from '.../../redux/reducers/chapters';
import { booksReducer } from '.../../redux/reducers/books';
import { toggleReady, addChapter } from  '../../redux/actions/chapters';
import { toggleEditable } from '../../redux/actions/books';


class TableOfContents extends React.Component {
  render() {
    return (
      books.map((book, i) => (
        <Book key={book.id} title={book.title} providedChapters={book.chapters}/>
      ))
    )
  }
}

const Book = ({title, providedChapters}) => {
  const [chapters, chaptersDispatch] = useReducer(
    chaptersReducer, providedChapters
  )
  const [editable, booksDispatch] = useReducer(
    booksReducer, false
  )
  return (
    <table className='mx-12'>
      <BookHead title={title} booksDispatch={booksDispatch} editable={editable}/>
      <tbody>
        <ChaptersList chapters={chapters} chaptersDispatch={chaptersDispatch} editable={editable}/>
        <ChapterForm chaptersDispatch={chaptersDispatch} editable={editable}/>
      </tbody>
    </table>
  )
}

function BookHead ({title, booksDispatch, editable}) {
  return(
    <thead>
      <tr>
        <td className='p-2 text-xl'>{title}</td>
        <td><button onClick={() => booksDispatch(toggleEditable(editable))}>Edit</button></td>
      </tr>
    </thead>
  )
}

function ChaptersList ({chapters, chaptersDispatch, editable}) {
  return (
    chapters.map((chapter, i) => (
      <tr key={chapter.id}>
        <td>{chapter.title}</td>
        {
          editable &&
            <td>
              <input onChange={() => chaptersDispatch(toggleReady(chapter.id))} 
                type='checkbox'
                checked={chapter.ready}/>
            </td>
        }
      </tr>
    ))
  )
}

function ChapterForm ({chaptersDispatch, editable}) {
  return (
    editable &&
      <tr>
        <td>
          <form onSubmit={
            (e) => {
              e.preventDefault();
              chaptersDispatch(addChapter(e.target.title.value));
            }
          }>
            <input type='text' name='title' className='mr-4'/>
            <button>Add Chapter</button>
          </form>
        </td>
      </tr>
  )
}

let books = [
  {
    id: 0,
    title: "Тихий Дон",
    chapters: [
      { id: 0, title: 'глава 1', ready: false },
      { id: 1, title: 'глава 2', ready: false },
      { id: 2, title: 'глава 3', ready: true },
      { id: 3, title: 'глава 4', ready: false }
    ]
  },
  {
    id: 1,
    title: "Чипполино 2",
    chapters: [
      { id: 0, title: 'глава 1 - Первая кровь', ready: false },
      { id: 1, title: 'глава 2 - Восставший из пепла', ready: true },
      { id: 2, title: 'глава 3 - Кровавый закат', ready: false },
      { id: 3, title: 'глава 4 - Торжество правосудия', ready: true }
    ]
  }
]

export default TableOfContents;
