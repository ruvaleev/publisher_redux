import { filtersActions } from '../actionTypes/filters';

export const showAll = () => ({
  type: filtersActions.SHOW_ALL
})

export const showUncompleted = () => ({
  type: filtersActions.SHOW_UNCOMPLETED
})

export const showCompleted = () => ({
  type: filtersActions.SHOW_COMPLETED
})
