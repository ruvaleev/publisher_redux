import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// Import your own reducer
import rootReducer from '../../redux/reducers';
import uuid from 'uuid-random';

// const defaultBooksReducer = { present: {
//   books: [
//     {
//       _id: uuid(), title: 'Тихий Дон', chapters: [
//         { id: 0, title: 'глава 1', subsections: [{id: 0, title: 'подраздел 1', ready: false}] }
//       ]
//     }
//   ], isLoading: false, isError: false, error: null
// }}

// const defaultTableOfContentsReducer = { editable: false }
// const defaultFiltersReducer = { value: 'SHOW_ALL' }

const initialState = {
  booksReducer: { present: {
    books: [
      {
        _id: uuid(), title: 'Тихий Дон', chapters: [
          { id: 0, title: 'глава 1', subsections: [{id: 0, title: 'подраздел 1', ready: false}] }
        ]
      }
    ], isLoading: false, isError: false, error: null
  }},
  tableOfContentsReducer: { editable: false },
  filtersReducer: { value: 'SHOW_ALL' }
}

function render(
  ui,
  {
    initialState,
    store = createStore(rootReducer, initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }
