import * as Actions from '../action-types'

export const updateTextSentence = jsonPackage => {
  return dispatch =>
    dispatch({
      type: Actions.UPDATE_TEXT_SENTENCE,
      payload: jsonPackage
    })
}

export const updateSentence = jsonPackage => {
  return dispatch =>
    dispatch({
      type: Actions.UPDATE_SENTENCE,
      payload: jsonPackage
    })
}
