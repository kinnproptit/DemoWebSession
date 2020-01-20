import React, { useEffect } from 'react'
import environments from 'environments'
import { Part } from './Part'

export const MeetingNoteSocket = ({ meetingPartId, ...restProps }) => {
  const wsEndpoint =
    `ws://${environments.websocketUrl}?meeting_part__id=` + meetingPartId
  // eslint-disable-next-line no-undef
  const ws = new WebSocket(wsEndpoint)
  ws.onopen = () => {
    console.log('Socket channel connected to group ' + meetingPartId)
  }
  //   ws.onmessage = evt => {
  //     const message = JSON.parse(evt.data)
  //     onChangeSentences(message)
  //   }

  useEffect(() => {
    return () => {
      console.log('Closing socket')
      ws.close(1000, 'User chose other part. Change socket channel')
    }
  }, [ws])
  return <Part websocket={ws} {...restProps} />
}
