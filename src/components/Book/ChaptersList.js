import React, { useReducer } from 'react';

import Title from '../shared/Title';
import TitleForm from '../shared/TitleForm';
import Subsections from './Subsections';
import { subsectionsReducer } from '.../../redux/reducers/subsections';
import { addSubsection } from '../../redux/actions/subsections';

function ChaptersList ({chapters, editable}) {
  return (
    chapters.map((chapter, i) => (
      <Chapter key={chapter.id} chapter={chapter} editable={editable}/>
    ))
  )
}

const Chapter = ({chapter, editable}) => {
  const [subsections, subsectionsDispatch] = useReducer(
    subsectionsReducer, chapter.subsections
  )
  return (
    <tr key={chapter.id} className='flex flex-col'>
      <Title title={chapter.title} className='flex'/>
      <Subsections subsections={subsections} dispatch={subsectionsDispatch} editable={editable}/>
      {
        editable &&
          <TitleForm
            title='Add subsection'
            dispatch={subsectionsDispatch}
            dispatchCallback={addSubsection}
            className='pl-4'/>
      }
    </tr>
  )
}

export default ChaptersList;
