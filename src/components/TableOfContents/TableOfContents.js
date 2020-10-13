import React, { useReducer } from 'react';

import { chaptersReducer } from '.../../redux/reducers/chapters';
import { toggleReady, addChapter } from  '../../redux/actions/chapters';


class TableOfContents extends React.Component {
  render() {
    return (
      books.map((book, i) => (
        <BookRow key={book.id} title={book.title} providedChapters={book.chapters}/>
      ))
    )
  }
}

const BookRow = ({title, providedChapters}) => {
  const [chapters, dispatch] = useReducer(
    chaptersReducer, providedChapters
  )
  return (
    <table className='mx-12'>
      <thead>
        <tr><td className='p-2 text-xl'>{title}</td></tr>
      </thead>
      <tbody>
        {chapters.map((chapter, i) => (
          <tr key={chapter.id}>
            <td>{chapter.title}</td>
            <td>
              <input onChange={() => dispatch(toggleReady(chapter.id))} 
                type='checkbox'
                checked={chapter.ready}/>
            </td>
          </tr>
        ))}
        <tr>
          <td>
            <form onSubmit={
              (e) => {
                e.preventDefault();
                dispatch(addChapter(e.target.title.value));
              }
            }>
              <input type='text' name='title' className='mr-4'/>
              <button>Add Chapter</button>
            </form>
          </td>
        </tr>
      </tbody>
    </table>
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
