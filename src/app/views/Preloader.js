import React, { createContext, useEffect } from 'react'
import axios from 'axios'

import environments from 'environments'
import { useState } from 'core'
import { LoadingIndicator } from 'ui'

export const PreloaderContext = createContext()

export const Preloader = ({ children }) => {
  const [state, setState] = useState({
    loading: true,
    sessions: [],
    parts: [],
    sentences: []
  })

  useEffect(() => {
    const fetchData = async () => {
      const sessions = await axios(`${environments.baseUrl}sessions`)
      const parts = await axios(`${environments.baseUrl}parts`)
      setState({ loading: false, sessions: sessions.data, parts: parts.data })
    }
    fetchData()
  }, [])

  if (state.loading) {
    return <LoadingIndicator />
  }

  const props = {
    ...state
  }

  return (
    <PreloaderContext.Provider value={props}>
      {children}
    </PreloaderContext.Provider>
  )
}
