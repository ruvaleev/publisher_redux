import React from 'react';

import Title from '../shared/Title';
import { toggleEditable } from '../../redux/actions/books';

function BookHead ({title, booksDispatch, editable}) {
  return(
    <thead>
      <tr>
        <td><button onClick={() => booksDispatch(toggleEditable(editable))}>Edit</button></td>
        <Title title={title} className='p-2 text-xl'/>
      </tr>
    </thead>
  )
}

export default BookHead;
