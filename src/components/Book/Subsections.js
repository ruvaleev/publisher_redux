import React from 'react';

import Checkbox from '../shared/Checkbox';
import Title from '../shared/Title';

function Subsections ({subsections, dispatch, editable, bookId, chapterId}) {
  return (
    <td>
      <table>
        <tbody>
          {subsections && subsections.map((subsection, i) => (
            <tr key={`subsection_${subsection.id}`} >
              <Title title={subsection.title} className='pl-4'/>
              {
                editable &&
                  <Checkbox
                    dispatch={dispatch}
                    dispatchCallback={{
                      bookId: bookId, chapterId: chapterId, subsectionId: subsection.id
                    }}
                    ready={subsection.ready}/>
              }
            </tr>
          ))}
        </tbody>
      </table>
    </td>
  )
}
export default Subsections;
