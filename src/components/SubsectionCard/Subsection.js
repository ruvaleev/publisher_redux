import React from 'react';

import Checkbox from '../shared/Checkbox';
import Title from '../shared/Title';

function Subsection ({readySubsectionToggle, editable, subsection, bookId, chapterId}) {
  return (
    <tr key={subsection.id} >
      <Title title={subsection.title} className='pl-4'/>
      {
        editable &&
          <Checkbox
            callback={() => readySubsectionToggle(
              {bookId: bookId, chapterId: chapterId, subsectionId: subsection.id}
            )}
            isChecked={subsection.ready} data-testid='Toggle subsection ready'/>
      }
    </tr>
  )
}

export default Subsection;
