import React from 'react';

import Title from '../shared/Title';
import TitleForm from '../shared/TitleForm';
import SubsectionsList from '../SubsectionsCard';
import isReady from '../shared/isReady';

function ChaptersList ({chapters, editable, subsectionAdd, bookId}) {
  return (
    chapters.map((chapter, i) => (
      <Chapter
        key={chapter.id}
        chapter={chapter}
        editable={editable}
        subsectionAdd={subsectionAdd}
        bookId={bookId}/>
    ))
  )
}

const Chapter = ({chapter, editable, subsectionAdd, bookId}) => {
  return (
    <tr key={`chapter_${chapter.id}_book_${bookId}`} className={`flex flex-col ${isReady(chapter) && 'text-green-500'}`}>
      <Title title={chapter.title} className='flex'/>
      <SubsectionsList
        bookId={bookId}
        chapterId={chapter.id}
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
