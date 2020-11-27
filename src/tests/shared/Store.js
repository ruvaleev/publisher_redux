import uuid from 'uuid-random';

const defaultBooksReducer = { present: {
  books: [
    {
      _id: uuid(), title: 'Тихий Дон', chapters: [
        { id: 0, title: 'глава 1', subsections: [{id: 0, title: 'подраздел 1', ready: false}] }
      ]
    }
  ], isLoading: false, isError: false, error: null
}}

const defaultTableOfContentsReducer = { editable: false }
const defaultFiltersReducer = { value: 'SHOW_ALL' }

function Store (props = {}) {
  return (
    {
      booksReducer: props.booksReducer || defaultBooksReducer,
      tableOfContentsReducer: props.tableOfContentsReducer || defaultTableOfContentsReducer,
      filtersReducer: props.filtersReducer || defaultFiltersReducer
    }
  )
}

export default Store;
