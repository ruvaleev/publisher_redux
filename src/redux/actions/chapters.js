import { chaptersActions } from '../actionTypes/chapters';

export const toggleReadyChapter = (id) => ({
  id,
  type: chaptersActions.TOGGLE_READY
})

export const addChapter = (title) => ({
  title,
  type: chaptersActions.ADD_CHAPTER
})
