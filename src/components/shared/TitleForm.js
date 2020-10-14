import React from 'react';

function TitleForm ({title, dispatch, dispatchCallback, className}) {
  return (
    <td className={className}>
      <form onSubmit={(e) => {e.preventDefault(); dispatch(dispatchCallback(e.target.title.value));}}>
        <input type='text' name='title' className='mr-4'/>
        <button>{title}</button>
      </form>
    </td>
  )
}

export default TitleForm;
