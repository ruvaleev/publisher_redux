import React from 'react';
import { connect } from 'react-redux';

import { toggleEditable } from '../../redux/slices/tableOfContents';
import { showAll, showUncompleted, showCompleted } from '../../redux/slices/filters';

function Menu ({editable, filter, showAll, showUncompleted, showCompleted, toggleEditable, undo, redo}) {
  return (
    <div className='fixed -m-16 text-xl'>
      <button className='px-4' onClick={() => toggleEditable(editable)}>Edit</button>
      <FilterButton filter={filter} value='SHOW_ALL' title='Show All' callback={showAll}/>
      <FilterButton filter={filter} value='SHOW_UNCOMPLETED' title='Show Uncompleted' callback={showUncompleted}/>
      <FilterButton filter={filter} value='SHOW_COMPLETED' title='Show Completed' callback={showCompleted}/>
      <button className='px-4' onClick={() => undo()}>Undo</button>
      <button className='px-4' onClick={() => redo()}>Redo</button>
    </div>
  )
}

function FilterButton ({filter, value, title, callback}) {
  return (
    <button
      className={`px-4 rounded-lg border-gray-500 border-solid ${filter == value && 'border'}`}
      onClick={() => callback()}>
      {title}
    </button>
  )
}

const mapStateToProps = (state) => ({
  editable: state.tableOfContentsReducer.editable,
  filter: state.filtersReducer.value
})

const mapDispatchToProps = (dispatch) => ({
  toggleEditable: (editable) => dispatch(toggleEditable(editable)),
  showAll: () => dispatch(showAll()),
  showUncompleted: () => dispatch(showUncompleted()),
  showCompleted: () => dispatch(showCompleted()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
