/* eslint-disable camelcase */
/* eslint-disable react/jsx-no-bind */
import React, { useEffect, Fragment } from 'react'

import environments from 'environments'
import { useState } from 'core'

const MeetingNoteSocket = ({ meetingPartId, onChangeSentences }) => {
  const wsEndpoint =
    `ws://${environments.websocketUrl}?meeting_part__id=` + meetingPartId
  // eslint-disable-next-line no-undef
  const ws = new WebSocket(wsEndpoint)
  ws.onopen = () => {
    console.log('Socket channel connected to group ' + meetingPartId)
  }
  ws.onmessage = evt => {
    const message = JSON.parse(evt.data)
    onChangeSentences(message)
  }
  useEffect(() => {
    return () => {
      console.log('Closing socket')
      ws.close(1000, 'User chose other part. Change socket channel')
    }
  }, [ws])
  return null
}

export const Part = ({ partId, sentences }) => {
  const [state, setState] = useState({ sentences, meetingPartId: partId })
  const showText = environments.text_showing
  const apiText = {}
  const onChangeSentences = message => {
    apiText[showText] = message
    setState({
      sentences: [...sentences, apiText]
    })
  }

  return (
    <Fragment>
      {state.sentences.length === 0 ? (
        <span>Chưa có nội dung phiên họp</span>
      ) : null}
      {state.sentences.map(text => text[showText] + ' ')}
      <MeetingNoteSocket
        sentences={state.sentences}
        meetingPartId={state.meetingPartId}
        onChangeSentences={onChangeSentences}
      />
    </Fragment>
  )
}
