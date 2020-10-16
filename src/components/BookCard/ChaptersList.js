import React from 'react';

import Chapter from './Chapter';

function ChaptersList ({chapters, bookId}) {
  return (
    chapters.map((chapter, i) => (
      <Chapter key={chapter.id} chapter={chapter} bookId={bookId}/>
    ))
  )
}

export default ChaptersList;
