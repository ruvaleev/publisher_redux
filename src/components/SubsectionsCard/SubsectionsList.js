import React from 'react';

import Checkbox from '../shared/Checkbox';
import Title from '../shared/Title';

function SubsectionsList ({readySubsectionToggle, subsections, editable, bookId, chapterId}) {
  return (
    <td>
      <table>
        <tbody>
          {subsections && subsections.map((subsection, i) => (
            <tr key={subsection.id} >
              <Title title={subsection.title} className='pl-4'/>
              {
                editable &&
                  <Checkbox
                    callback={() => readySubsectionToggle(
                      {bookId: bookId, chapterId: chapterId, subsectionId: subsection.id}
                    )}
                    isChecked={subsection.ready}/>
              }
            </tr>
          ))}
        </tbody>
      </table>
    </td>
  )
}

export default SubsectionsList;
