import React from 'react'
import { withRouter } from 'react-router-dom'
import { Session } from './Session'

const SessionContainer = ({ match }) => {
  const props = {
    id: match.params.id
  }

  return <Session {...props} />
}

export default withRouter(SessionContainer)
