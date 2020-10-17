import React from 'react';

function Checkbox ({callback, isChecked}) {
  return (
    <td>
      <input onChange={callback}  type='checkbox' checked={isChecked}/>
    </td>
  )
}

export default Checkbox;
