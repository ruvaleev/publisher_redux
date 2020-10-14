import React, { useReducer } from 'react';

function Title ({title, className}) {
  return <td className={className}>{title}</td>
}

export default Title;
