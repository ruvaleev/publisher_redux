import React from 'react';

import isReady from '../shared/isReady';

const BookStatisticCard = ({book}) => {
  const readyChaptersCount = countReadyChapters(book)
  const totalChaptersCount = book.chapters.length
  const readyPercentage = (readyChaptersCount / totalChaptersCount) * 100
  const completed = readyChaptersCount == totalChaptersCount
  return (
    <div className='py-4'>
      <div>{book.title}</div>
      <div>Total Subsections Count {totalSubsectionsCount(book)}</div>
      <div>Ready Subsections {readySubsectionsCount(book)}</div>
      <div>Total Chapters Count {totalChaptersCount}</div>
      <div>Ready Chapters {readyChaptersCount}</div>
      <div>{completed ? 'Completed' : readyPercentage + '%'}</div>
    </div>
  )
}

function countReadyChapters (book) {
  return book.chapters.filter((chapter) => {
    return isReady(chapter)
  }).length
}

function totalSubsectionsCount (book) {
  var total = 0
  book.chapters.forEach((chapter) => {
    total += chapter.subsections.length
  })
  return total
}

function readySubsectionsCount (book) {
  var totalReady = 0
  book.chapters.forEach((chapter) => {
    chapter.subsections.forEach((subsection) => {
      subsection.ready && (totalReady += 1)
    })
  })
  return totalReady
}

export default BookStatisticCard;
