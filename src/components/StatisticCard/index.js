import { connect } from 'react-redux';

import StatisticCard from './StatisticCard';
import isReady from '../shared/isReady';

const mapStateToProps = (state) => ({
  books: composeStatistic(state.booksReducer.present.books)
})

function composeStatistic (books) {
  return books.map((book) => composeBookStatistic(book))
}

function composeBookStatistic (book) {
  const readyChaptersCount = countReadyChapters(book)
  const totalChaptersCount = book.chapters.length
  const readyPercentage = (readyChaptersCount / totalChaptersCount) * 100
  return {
    title: book.title,
    subsectionsCount: totalSubsectionsCount(book),
    readySubsectionsCount: readySubsectionsCount(book),
    totalChaptersCount: totalChaptersCount,
    readyChaptersCount: readyChaptersCount,
    readyStatus: readyPercentage == 100 ? 'Completed' : readyPercentage + '%'
  }
}

function countReadyChapters (book) {
  return book.chapters.filter((chapter) => {
    return isReady(chapter)
  }).length
}

function totalSubsectionsCount (book) {
  return book.chapters.reduce(
    (acc, chapter) => acc + chapter.subsections.length,
    0
  )
}

function readySubsectionsCount (book) {
  return book.chapters.reduce(
    (acc, chapter) => acc + chapter.subsections.filter(s => s.ready).length,
    0
  )
}

export default connect(mapStateToProps)(StatisticCard);
