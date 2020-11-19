import React from 'react';
import { connect } from 'react-redux';

import Title from '../shared/Title';
import SubsectionsList from '../SubsectionsCard';
import isReady from '../shared/isReady';
import { addSubsection } from '../../redux/slices/books';
import SubsectionForm from './SubsectionForm';

const Chapter = ({chapter, editable, addSubsection, bookId}) => {
  return (
    <tr key={chapter.id} className={`flex flex-col ${isReady(chapter) && 'text-green-500'}`}>
      <Title title={chapter.title} className='flex'/>
      <SubsectionsList bookId={bookId} chapterId={chapter.id}/>
      {
        editable &&
          <SubsectionForm
            onSubmit={data => {addSubsection({bookId: bookId, chapterId: chapter.id, title: data})}}
            title='Add subsection'
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
