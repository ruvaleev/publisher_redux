import React from 'react';

function TitleForm ({bookId, chapterId, title, dispatch, className}) {
  return (
    <td className={className}>
      <form onSubmit={(e) => {
        e.preventDefault();
        dispatch({bookId: bookId, chapterId: chapterId, title: e.target.title.value });
        e.target.title.value = '';
      }}>
        <input type='text' name='title' className='mr-4'/>
        <button>{title}</button>
      </form>
    </td>
  )
}

export default TitleForm;
