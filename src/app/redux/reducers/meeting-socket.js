import * as Actions from '../action-types'

const initState = null

const socketSentenceReducer = (state = initState, action) => {
  switch (action.type) {
    case Actions.UPDATE_TEXT_SENTENCE:
      return action.payload
    case Actions.UPDATE_SENTENCE:
      return action.payload
    default:
      return state
  }
}

export default socketSentenceReducer
