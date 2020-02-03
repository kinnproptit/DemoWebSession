/* eslint-disable camelcase */
/* eslint-disable react/jsx-no-bind */
import React, { useEffect, Fragment } from 'react'
import { useSelector } from 'react-redux'

import { Card, Form } from 'tabler-react'

import { useState } from 'core'
import environments from 'environments'

export const Part = ({ sentences, websocket }) => {
  const [state, setState] = useState({
    sentences,
    runningSentences: [],
    isFinalState: true
  })
  const showText = environments.text_showing
  let apiText = {}

  const socketSentenceRedux = useSelector(state => state.socketSentenceReducer)
  useEffect(() => {
    if (sentences.length > 0) {
      setState({ isFinalState: sentences[sentences.length - 1].is_final })
    }
  }, [])

  useEffect(() => {
    if (socketSentenceRedux !== null) {
      onChangeSentences(socketSentenceRedux)
    }
  }, [socketSentenceRedux])

  const onChangeSentences = message => {
    apiText = message
    let clone_sentences = [...state.sentences]
    let clone_running_sentences = [...state.runningSentences]

    if (state.isFinalState) {
      clone_sentences.push(clone_running_sentences)
    } else {
      // clone_sentences[clone_sentences.length - 1] = apiText
      clone_running_sentences.push(apiText)
    }

    // console.log(apiText)
    setState({
      isFinalState: message.is_final,
      sentences: clone_sentences,
      runningSentences: clone_running_sentences
    })
  }

  return (
    <Fragment>
      <Card>
        <Card.Body>
          {state.sentences.length === 0 ? (
            <span>Chưa có nội dung phiên họp</span>
          ) : (
            <Form>
              <Form.Textarea rows={state.sentences.length / 5}>
                {state.sentences.map(text => text[showText] + ' ')}
              </Form.Textarea>
            </Form>
          )}
        </Card.Body>
      </Card>
      {state.runningSentences.length !== 0 ? (
        <Card>
          <Card.Body>
            {state.runningSentences.map(text => text[showText] + ' ')}
          </Card.Body>
        </Card>
      ) : null}
    </Fragment>
  )
}
