import React from 'react';
import { connect } from 'react-redux';

import { toggleEditable } from '../../redux/actions/tableOfContents';
import { showAll, showUncompleted, showCompleted } from '../../redux/actions/filters';

function Menu ({editable, showAll, showUncompleted, showCompleted, toggleEditable}) {
  return (
    <div className='fixed -m-16 text-xl'>
      <button className='px-4' onClick={() => toggleEditable(editable)}>Edit</button>
      <button className='px-4' onClick={() => showAll()}>Show All</button>
      <button className='px-4' onClick={() => showUncompleted()}>Show Uncompleted</button>
      <button className='px-4' onClick={() => showCompleted()}>Show Completed</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  editable: state.tableOfContentsReducer.editable
})

const mapDispatchToProps = (dispatch) => ({
  toggleEditable: (editable) => dispatch(toggleEditable(editable)),
  showAll: () => dispatch(showAll()),
  showUncompleted: () => dispatch(showUncompleted()),
  showCompleted: () => dispatch(showCompleted()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
