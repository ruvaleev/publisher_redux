import React from 'react';
import { connect } from 'react-redux';

import Title from '../shared/Title';
import SubsectionsList from '../SubsectionsCard';
import isReady from '../shared/isReady';
import { addSubsection } from '../../redux/slices/books';

function SubsectionForm ({onSubmit, title, className}) {
  return (
    <td className={className}>
      <form onSubmit={onSubmit}>
        <input type='text' name='title' className='mr-4' data-testid='Add subsection'/>
        <button>{title}</button>
      </form>
    </td>
  )
}

const Chapter = ({chapter, editable, addSubsection, bookId}) => {
  return (
    <tr key={chapter.id} className={`flex flex-col ${isReady(chapter) && 'text-green-500'}`}>
      <Title title={chapter.title} className='flex'/>
      <SubsectionsList bookId={bookId} chapterId={chapter.id}/>
      {
        editable &&
          <SubsectionForm
            onSubmit={(e) => {
              e.preventDefault();
              addSubsection({bookId: bookId, chapterId: chapter.id, title: e.target.title.value });
              e.target.title.value = '';
            }}
            title='Add subsectiona'
            className='pl-4'/>
      }
    </tr>
  )
}

const mapStateToProps = (state) => ({
  editable: state.tableOfContentsReducer.editable
})

const mapDispatchToProps = (dispatch) => ({
  addSubsection: (data) => dispatch(addSubsection(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Chapter);
