import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Book from '../../components/BookCard';
import Store from '../shared/Store';

function renderWithStore(store, book) {
  return render(
    <Provider store={store}>
      <Book book={book}/>
    </Provider>
  );
}

describe('BookCard', () => {
  const mockStore = configureStore([]);
  let store
  let book
  let component

  describe('Book', () => {
    it("doesn't render chapter form if state editable is false", () => {
      store = mockStore(Store({ tableOfContentsReducer: { editable: false } }));
      book = store.getState().booksReducer.present.books[0]
      component = renderWithStore(store, book)
   
      expect(component.queryByText('Add chapter')).not.toBeInTheDocument()
    });

    it('renders chapter form if state editable is true', () => {
      store = mockStore(Store({ tableOfContentsReducer: { editable: true } }));
      book = store.getState().booksReducer.present.books[0]
      component = renderWithStore(store, book)
   
      expect(component.queryByText('Add chapter')).toBeInTheDocument()
    });
  });
})
