import React from 'react';

import Subsection from './Subsection';

function SubsectionsList ({subsections, bookId, chapterId}) {
  return (
    <td>
      <table>
        <tbody>
          {subsections && subsections.map((subsection, i) => (
            <Subsection key={i} subsection={subsection} bookId={bookId} chapterId={chapterId}/>
          ))}
        </tbody>
      </table>
    </td>
  )
}

export default SubsectionsList;
