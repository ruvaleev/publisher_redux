import React from 'react';

function ChapterForm ({onSubmit, title, className}) {
  return (
    <td className={className}>
      <form onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e.target.elements.title.value);
        e.target.elements.title.value = '';
      }}>
        <input type='text' name='title' className='mr-4' data-testid='Add chapter'/>
        <button>{title}</button>
      </form>
    </td>
  )
}

export default ChapterForm;
