import React from 'react';

import Checkbox from '../shared/Checkbox';
import Title from '../shared/Title';
import { toggleReadySubsection } from '../../redux/actions/subsections';

function Subsections ({subsections, dispatch, editable}) {
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
                    dispatch={dispatch}
                    dispatchCallback={toggleReadySubsection(subsection.id)}
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
