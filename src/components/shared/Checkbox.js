import React from 'react';

function Checkbox ({callback, isChecked, ...inputProps}) {
  return (
    <td>
      <input onChange={callback}  type='checkbox' checked={isChecked} {...inputProps}/>
    </td>
  )
}

export default Checkbox;
