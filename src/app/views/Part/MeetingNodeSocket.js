import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import environments from 'environments'
import { useState } from 'core'

import * as Actions from '../../redux/action-creators/meeting-socket'

import { Part } from './Part'

export const MeetingNoteSocket = ({ meetingPartId, ...restProps }) => {
  const [ws, setWs] = useState()
  const dispatch = useDispatch()
  const socketSentenceRedux = useSelector(state => state.socketSentenceReducer)

  useEffect(() => {
    const wsEndpoint =
      `ws://${environments.websocketUrl}?meeting_part__id=` + meetingPartId
    // eslint-disable-next-line no-undef
    const ws = new WebSocket(wsEndpoint)
    ws.onopen = () => {
      console.log('Socket channel connected to group ' + meetingPartId)
    }

    setWs(ws)

    ws.onmessage = evt => {
      const message = JSON.parse(evt.data)
      dispatch(Actions.updateTextSentence(message))
    }

    return () => {
      console.log('Closing socket')
      ws.close(1000, 'User chose other part. Change socket channel')
    }
  }, [meetingPartId])

  return <Part websocket={ws} {...restProps} />
}
