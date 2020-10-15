import React from 'react';

import Title from '../shared/Title';

function BookHead ({title, dispatch, editable}) {
  return(
    <thead>
      <tr>
        <td><button onClick={() => dispatch(editable)}>Edit</button></td>
        <Title title={title} className='p-2 text-xl'/>
      </tr>
    </thead>
  )
}

export default BookHead;
