import React from 'react';

function Checkbox ({dispatch, dispatchParams, ready}) {
  return (
    <td>
      <input onChange={() => dispatch(dispatchParams)}  type='checkbox' checked={ready}/>
    </td>
  )
}

export default Checkbox;
