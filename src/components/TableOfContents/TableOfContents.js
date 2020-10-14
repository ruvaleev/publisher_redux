import React, { useReducer } from 'react';

import Book from '../Book';

class TableOfContents extends React.Component {
  render() {
    return (
      books.map((book, i) => (
        <Book key={book.id} title={book.title} providedChapters={book.chapters}/>
      ))
    )
  }
}

let books = [
  {
    id: 0,
    title: "Тихий Дон",
    chapters: [
      { id: 0, title: 'глава 1', subsections:
        [
          { id: 0, title: 'Подраздел 1', ready: false },
          { id: 1, title: 'Подраздел 2', ready: false }
        ] 
      },
      { id: 1, title: 'глава 2', subsections:
        [
          { id: 0, title: 'Подраздел 2-1', ready: false }
        ]
      },
      { id: 2, title: 'глава 3', subsections:
        [
          { id: 0, title: 'Подраздел 3-1', ready: false },
          { id: 1, title: 'Подраздел 3-2', ready: false },
          { id: 2, title: 'Подраздел 3-3', ready: false }
        ]
      },
      { id: 3, title: 'глава 4', subsections:
        [
          { id: 0, title: 'Подраздел 1', ready: false }
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Чипполино 2",
    chapters: [
      { id: 0, title: 'глава 1 - Первая кровь', subsections:
        [
          { id: 0, title: 'Подраздел для книги 2', ready: false }
        ]
      },
      { id: 1, title: 'глава 2 - Восставший из пепла', subsections:
        [
          { id: 0, title: 'Подраздел 2-2', ready: false },
          { id: 1, title: 'Подраздел для книги 2-1', ready: false },
          { id: 2, title: 'Подраздел 2-3', ready: false }
        ] 
      },
      { id: 2, title: 'глава 3 - Кровавый закат', subsections:
        [
          { id: 0, title: 'Подраздел для книги 2', ready: true }
        ]
      },
      { id: 3, title: 'глава 4 - Торжество правосудия', subsections:
        [
          { id: 0, title: 'Подраздел для книги 2', ready: false }
        ]
      }
    ]
  }
]

export default TableOfContents;
