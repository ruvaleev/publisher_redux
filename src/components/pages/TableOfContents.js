import React from 'react';

const TableOfContents = (props) => {
  console.log(books);
  return (
    props.editable ?
      <>editable</>
    :
      <ContentsList/>
  );
}

const ContentsList = () => {
  return(
    books.map((book, i) => (
      <BookRow key={i} title={book.title} articles={book.articles}/>
    ))
  )
}

const BookRow = ({title, articles}) => {
  return (
    <tr className='mx-12'>
      <td className='p-2 text-xl'>{title}</td>
      {articles.map((article, i) => (
        <tr>
          <td>{article.title}</td>
          <td>
            <input type='checkbox' checked={article.ready}/>
          </td>
        </tr>
      ))}
    </tr>
  )
}

let books = [
  {
    title: "Тихий Дон",
    articles: [
      { title: 'глава 1', ready: false },
      { title: 'глава 2', ready: false },
      { title: 'глава 3', ready: true },
      { title: 'глава 4', ready: false }
    ]
  },
  {
    title: "Чипполино 2",
    articles: [
      { title: 'глава 1 - Первая кровь', ready: false },
      { title: 'глава 2 - Восставший из пепла', ready: true },
      { title: 'глава 3 - Кровавый закат', ready: false },
      { title: 'глава 4 - Торжество правосудия', ready: true }
    ]
  }
]

export default TableOfContents;
