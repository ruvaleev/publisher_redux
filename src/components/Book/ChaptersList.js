import React from 'react';

import Title from '../shared/Title';
import TitleForm from '../shared/TitleForm';
import Subsections from './Subsections';

function ChaptersList ({chapters, editable, subsectionAdd, bookId, readySubsectionToggle}) {
  return (
    chapters.map((chapter, i) => (
      <Chapter
        key={chapter.id}
        chapter={chapter}
        editable={editable}
        subsectionAdd={subsectionAdd}
        bookId={bookId}
        readySubsectionToggle={readySubsectionToggle}/>
    ))
  )
}

const Chapter = ({chapter, editable, subsectionAdd, readySubsectionToggle, bookId}) => {
  return (
    <tr key={`chapter_${chapter.id}_book_${bookId}`} className='flex flex-col'>
      <Title title={chapter.title} className='flex'/>
      <Subsections
        subsections={chapter.subsections}
        bookId={bookId}
        chapterId={chapter.id}
        dispatch={readySubsectionToggle}
        editable={editable}/>
      {
        editable &&
          <TitleForm
            title='Add subsection'
            dispatch={subsectionAdd}
            bookId={bookId}
            chapterId={chapter.id}
            className='pl-4'/>
      }
    </tr>
  )
}

export default ChaptersList;
