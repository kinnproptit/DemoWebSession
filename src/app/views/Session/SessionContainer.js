import React, { useEffect } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

import environments from 'environments'
import { useState } from 'core'
import { LoadingIndicator } from 'ui'

import { Session } from './Session'
// import { PreloaderContext } from '../Preloader'

const SessionContainer = ({ match }) => {
  const [state, setState] = useState({
    loading: true,
    parts: [],
    sentences: [],
    partId: null
  })
  const id = match.params.id

  useEffect(() => {
    const fetchData = async () => {
      const parts = await axios(
        `${environments.baseUrl}parts/?meeting_session__id=` + id
      )
      const partId = state.partId || parts.data[0].id
      const sentences = await axios(
        `${environments.baseUrl}sentences/?meeting_part__id=` + partId
      )
      setState({
        loading: false,
        parts: parts.data,
        sentences: sentences.data,
        partId
      })
    }
    fetchData()
  }, [])

  if (state.loading) {
    return <LoadingIndicator />
  }

  const props = {
    ...state,
    setState
  }

  // const parts = useContext(PreloaderContext)

  // const props = {
  //   parts: parts.filter(({}) => )
  // }

  return <Session {...props} />
}

export default withRouter(SessionContainer)
