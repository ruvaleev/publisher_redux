import React from 'react';

function Checkbox ({dispatch, dispatchCallback, ready}) {
  return (
    <td>
      <input onChange={() => dispatch(dispatchCallback)}  type='checkbox' checked={ready}/>
    </td>
  )
}

export default Checkbox;
