/* eslint-disable camelcase */
/* eslint-disable react/jsx-no-bind */
import React, { Fragment } from 'react'

import environments from 'environments'
import { useState } from 'core'

export const Part = ({ sentences, websocket }) => {
  const [state, setState] = useState({ sentences })
  const showText = environments.text_showing
  const apiText = {}

  const onChangeSentences = message => {
    apiText[showText] = message
    setState({
      sentences: [...state.sentences, apiText]
    })
  }

  websocket.onmessage = evt => {
    const message = JSON.parse(evt.data)
    onChangeSentences(message)
  }

  return (
    <Fragment>
      {state.sentences.length === 0 ? (
        <span>Chưa có nội dung phiên họp</span>
      ) : null}
      {state.sentences.map(text => text[showText] + ' ')}
    </Fragment>
  )
}
