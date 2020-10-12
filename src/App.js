import React from 'react';
import './assets/main.css';

const App = (props) => (
  <div className="flex flex col h-screen items-center justify-center bg-gray-200 text-gray-500">
    Publisher App 2
  </div>
);

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

export default App;
