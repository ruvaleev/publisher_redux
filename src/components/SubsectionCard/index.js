import { connect } from 'react-redux';

import { toggleSubsectionReady } from '../../redux/slices/books';
import Subsection from './Subsection';

const mapStateToProps = (state) => ({
  editable: state.tableOfContentsReducer.editable
})

const mapDispatchToProps = (dispatch) => ({
  readySubsectionToggle: (data) => dispatch(toggleSubsectionReady(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Subsection);
