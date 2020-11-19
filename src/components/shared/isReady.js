function isReady (chapter) {
  return !chapter.subsections.some((subsection) => !subsection.ready )
}

export default isReady;
