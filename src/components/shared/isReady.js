function isReady (chapter) {
  let readiness = chapter.subsections.map((subsection) => {
    return subsection.ready
  })
  return !readiness.includes(false)
}

export default isReady;
