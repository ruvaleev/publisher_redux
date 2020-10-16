import React from 'react';
import { connect } from 'react-redux';

import Title from '../shared/Title';
import TitleForm from '../shared/TitleForm';
import SubsectionsList from '../SubsectionsCard';
import isReady from '../shared/isReady';
import { addSubsection } from '../../redux/actions/books';


const Chapter = ({chapter, editable, addSubsection, bookId}) => {
  return (
    <tr key={`chapter_${chapter.id}_book_${bookId}`} className={`flex flex-col ${isReady(chapter) && 'text-green-500'}`}>
      <Title title={chapter.title} className='flex'/>
      <SubsectionsList bookId={bookId} chapterId={chapter.id}/>
      {
        editable &&
          <TitleForm
            title='Add subsection'
            dispatch={addSubsection}
            bookId={bookId}
            chapterId={chapter.id}
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
