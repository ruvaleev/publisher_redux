import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import TableOfContents from '../../components/TableOfContents';
import Store from '../shared/Store';

const mockStore = configureStore([]);

describe('TableOfContents', () => {
  let store;
  
  beforeEach(() => {
    store = mockStore(Store());
  });

  it('render correctly table of books', () => {
    const component = render(
      <Provider store={store}>
        <TableOfContents/>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
