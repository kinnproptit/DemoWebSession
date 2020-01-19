import React from 'react'
import { ErrorBoundary } from 'ui'

import { Page } from 'tabler-react'
import { PartContainer } from '../Part'

export const Session = ({ parts, sentences, partId, setState }) => {
  console.log(partId)
  const onSelect = option => {
    setState({ partId: option.value })
  }

  const options = parts.map(({ id, name }) => ({
    value: id,
    label: name
  }))

  return (
    <ErrorBoundary>
      <Page.Content title='KỲ HỌP'>
        <PartContainer
          // eslint-disable-next-line react/jsx-no-bind
          onSelect={onSelect}
          options={options}
          sentences={sentences}
          partId={partId}
        />
      </Page.Content>
    </ErrorBoundary>
  )
}
