import React, { createContext, useEffect } from 'react'
import axios from 'axios'
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
      const sessions = await axios('http://db.eachclass.net:8000/sessions')
      // const sessions = await axios('https://jsonplaceholder.typicode.com/users')
      const parts = await axios('http://db.eachclass.net:8000/parts')
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
