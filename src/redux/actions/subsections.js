import { subsectionsActions } from '../actionTypes/subsections';

export const toggleReadySubsection = (id) => ({
  id,
  type: subsectionsActions.TOGGLE_READY
})

export const addSubsection = (title) => ({
  title,
  type: subsectionsActions.ADD_SUBSECTION
})
