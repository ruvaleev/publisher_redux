import { chaptersActions } from '../actionTypes/chapters';

export const toggleReady = (id) => ({
  id,
  type: chaptersActions.TOGGLE_READY
})
