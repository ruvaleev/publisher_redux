import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
import { render, fireEvent, screen } from '../shared/test-utils'
import TableOfContents from '../../components/TableOfContents';

import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Chapter from '../../components/ChaptersCard/Chapter';
import Store from '../shared/Store';

function renderWithStore() {
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
  describe('Subsection form', () => {
    it('dispatches addSubsection on form submit', () => {
      const mockStore = configureStore([]);
      const leftClick = { button: 0 };
      let component;

      component = render(
        <TableOfContents/>, { initialState: Store({ tableOfContentsReducer: { editable: true } }) }
      );


      const subsectionInput = component.getByTestId('Add subsection')
      userEvent.type(subsectionInput, 'New Subsection Title')
      const editButton = screen.queryByText('Add subsectiona');
      expect(screen.getByTestId('Add subsection')).toHaveValue('New Subsection Title')
      userEvent.click(editButton)
   
      expect(screen.getByText('New Subsection Title')).toBeInTheDocument()
    });
  
  });
})
