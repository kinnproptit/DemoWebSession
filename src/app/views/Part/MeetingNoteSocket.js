import React, { useEffect } from 'react'
import environments from 'environments'
import { useState } from 'core'

import { Part } from './Part'

export const MeetingNoteSocket = ({ meetingPartId, ...restProps }) => {
  const [ws, setWs] = useState()
  useEffect(() => {
    const wsEndpoint =
      `ws://${environments.websocketUrl}?meeting_part__id=` + meetingPartId
    // eslint-disable-next-line no-undef
    const ws = new WebSocket(wsEndpoint)
    ws.onopen = () => {
      console.log('Socket channel connected to group ' + meetingPartId)
    }
    setWs(ws)

    //   ws.onmessage = evt => {
    //     const message = JSON.parse(evt.data)
    //     onChangeSentences(message)
    //   }

    return () => {
      console.log('Closing socket')
      ws.close(1000, 'User chose other part. Change socket channel')
    }
  }, [meetingPartId])

  return <Part websocket={ws} {...restProps} />
}
