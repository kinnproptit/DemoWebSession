/* eslint-disable react/jsx-no-bind */
import React, { useEffect, Fragment } from 'react'

const MeetingNoteSocket = ({ meetingPartId }) => {
  const wsEndpoint =
    'ws://db.eachclass.net:8000/streaming/?meeting_part__id=' + meetingPartId
  // eslint-disable-next-line no-undef
  const ws = new WebSocket(wsEndpoint)
  ws.onopen = () => {
    console.log('Socket channel connected to group ' + meetingPartId)
  }
  ws.onmessage = evt => {
    const message = JSON.parse(evt.data)
    console.log(message)
  }
  useEffect(() => {
    return () => {
      console.log('Closing socket')
      ws.close(1000, 'User chose other part. Change socket channel')
    }
  }, [ws])
  return <Fragment />
}

export const Part = ({ partId }) => {
  return <MeetingNoteSocket meetingPartId={partId} />
}
