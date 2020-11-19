import React from 'react';

function SubsectionForm ({onSubmit, title, className}) {
  return (
    <td className={className}>
      <form onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e.target.elements.subsectionTitle.value);
        e.target.elements.subsectionTitle.value = '';
      }}>
        <input type='text' name='subsectionTitle' className='mr-4' data-testid='Add subsection'/>
        <button>{title}</button>
      </form>
    </td>
  )
}

export default SubsectionForm;
