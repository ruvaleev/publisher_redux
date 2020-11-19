import React from 'react';
import { connect } from 'react-redux';

import { toggleSubsectionReady } from '../../redux/slices/books';
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

const mapStateToProps = (state) => ({
  editable: state.tableOfContentsReducer.editable
})

const mapDispatchToProps = (dispatch) => ({
  readySubsectionToggle: (data) => dispatch(toggleSubsectionReady(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Subsection);
