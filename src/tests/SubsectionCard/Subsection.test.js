import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Subsection from '../../components/SubsectionCard';
import Store from '../shared/Store';
import { toggleSubsectionReady } from '../../redux/slices/books';

function renderWithStore(store, subsection, bookId, chapterId) {
  return render(
    <Provider store={store}>
      <table>
        <tbody>
          <Subsection subsection={subsection} bookId={bookId} chapterId={chapterId}/>
        </tbody>
      </table>
    </Provider>
  );
}

describe('SubsectionsCard', () => {
  const mockStore = configureStore([]);
  let store
  let subsection
  let bookId
  let chapterId
  let component

  describe('Subsection', () => {
    it("doesn't render checkbox if state editable is false", () => {
      store = mockStore(Store({ tableOfContentsReducer: { editable: false } }));
      bookId = store.getState().booksReducer.present.books[0]._id
      chapterId = store.getState().booksReducer.present.books[0].chapters[0].id
      subsection = store.getState().booksReducer.present.books[0].chapters[0].subsections[0]
      component = renderWithStore(store, subsection, bookId, chapterId)
   
      expect(component.queryByTestId('Toggle subsection ready')).not.toBeInTheDocument()
    });

    it('renders subsection form if state editable is true', () => {
      store = mockStore(Store({ tableOfContentsReducer: { editable: true } }));
      bookId = store.getState().booksReducer.present.books[0]._id
      chapterId = store.getState().booksReducer.present.books[0].chapters[0].id
      subsection = store.getState().booksReducer.present.books[0].chapters[0].subsections[0]
      component = renderWithStore(store, subsection, bookId, chapterId)
   
      expect(component.queryByTestId('Toggle subsection ready')).toBeInTheDocument()
    });

    it('dispatches toggleEditable on button click with proper current editable flag', () => {
      store = mockStore(Store({ tableOfContentsReducer: { editable: true } }));
      bookId = store.getState().booksReducer.present.books[0]._id
      chapterId = store.getState().booksReducer.present.books[0].chapters[0].id
      subsection = store.getState().booksReducer.present.books[0].chapters[0].subsections[0]
      store.dispatch = jest.fn()
      component = renderWithStore(store, subsection, bookId, chapterId)
      const checkbox = component.getByTestId('Toggle subsection ready')
      userEvent.click(checkbox)
   
      expect(store.dispatch).toHaveBeenCalledTimes(1);
      expect(store.dispatch).toHaveBeenCalledWith(
        toggleSubsectionReady({bookId: bookId, chapterId: chapterId, subsectionId: subsection.id})
      );
    });
  });
})
