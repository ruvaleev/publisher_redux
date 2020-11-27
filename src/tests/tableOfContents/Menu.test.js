import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Menu from '../../components/TableOfContents/Menu';
import Store from '../shared/Store';
import { toggleEditable } from '../../redux/slices/tableOfContents';
import { showAll, showUncompleted, showCompleted } from '../../redux/slices/filters';
import { ActionCreators } from 'redux-undo';

const mockStore = configureStore([]);
const leftClick = { button: 0 };
let store;
let component;

function renderWithStore(store) {
  return render(
    <Provider store={store}>
      <Menu/>
    </Provider>
  );
}

function renderWithDefaultStore() {
  store = mockStore(Store());
  return renderWithStore(store);
}

describe('Menu', () => {
  it('renders correctly Menu', () => {
    component = renderWithDefaultStore();

    expect(component).toMatchSnapshot();
  });
});

describe('Menu editable button', () => {
  it('dispatches toggleEditable on button click', () => {
    store = mockStore(Store());
    store.dispatch = jest.fn();
    component = renderWithStore(store);
    const editButton = screen.queryByText('Edit');
    fireEvent.click(editButton, leftClick);
 
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(
      toggleEditable(false)
    );
  });

  it('dispatches toggleEditable on button click with proper current editable flag', () => {
    store = mockStore(Store({ tableOfContentsReducer: { editable: true } }));
    store.dispatch = jest.fn();
    component = renderWithStore(store);
    const editButton = screen.queryByText('Edit');
    fireEvent.click(editButton, leftClick);
 
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(
      toggleEditable(true)
    );
  });
});

describe('Menu filters buttons', () => {
  beforeEach(() => {
    store = mockStore(Store());
    store.dispatch = jest.fn();
    component = renderWithStore(store);
  })

  it('dispatches Show All button click', () => {
    const showAllButton = screen.queryByText('Show All');
    fireEvent.click(showAllButton, leftClick);
 
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(showAll());
  });

  it('dispatches Show Uncompleted button click', () => {
    const showUncompletedButton = screen.queryByText('Show Uncompleted');
    fireEvent.click(showUncompletedButton, leftClick);
 
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(showUncompleted());
  });

  it('dispatches Show Completed button click', () => {
    const showCompletedButton = screen.queryByText('Show Completed');
    fireEvent.click(showCompletedButton, leftClick);
 
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(showCompleted());
  });
});

describe('Menu undoable', () => {
  beforeEach(() => {
    store = mockStore(Store());
    store.dispatch = jest.fn();
    component = renderWithStore(store);
  })

  it('dispatches Undo button click', () => {
    const undoButton = screen.queryByText('Undo');
    fireEvent.click(undoButton, leftClick);
 
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(ActionCreators.undo());
  });

  it('dispatches Redo button click', () => {
    const redoButton = screen.queryByText('Redo');
    fireEvent.click(redoButton, leftClick);
 
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(ActionCreators.redo());
  });
});
