import { connect } from 'react-redux';

import StatisticCard from './StatisticCard';

const mapStateToProps = (state) => ({
  books: state.booksReducer.books
})

export default connect(mapStateToProps)(StatisticCard);
