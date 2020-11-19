import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Chapter from '../../components/ChaptersCard/Chapter';
import Store from '../shared/Store';

function renderWithStore(store, chapter, bookId) {
  return render(
    <Provider store={store}>
      <table>
        <tbody>
          <Chapter chapter={chapter} bookId={bookId}/>
        </tbody>
      </table>
    </Provider>
  );
}

describe('ChaptersCard', () => {
  const mockStore = configureStore([]);
  let store
  let chapter
  let bookId
  let component

  describe('Chapter', () => {
    it("doesn't render subsection form if state editable is false", () => {
      store = mockStore(Store({ tableOfContentsReducer: { editable: false } }));
      chapter = store.getState().booksReducer.present.books[0].chapters[0]
      bookId = store.getState().booksReducer.present.books[0]._id
      component = renderWithStore(store, chapter, bookId)
   
      expect(component.queryByText('Add subsection')).not.toBeInTheDocument()
    });

    it('renders subsection form if state editable is true', () => {
      store = mockStore(Store({ tableOfContentsReducer: { editable: true } }));
      chapter = store.getState().booksReducer.present.books[0].chapters[0]
      bookId = store.getState().booksReducer.present.books[0]._id
      component = renderWithStore(store, chapter, bookId)
   
      expect(component.queryByText('Add subsection')).toBeInTheDocument()
    });
  });
})
