import React from 'react'

import { ErrorBoundary } from 'ui'
import { Dropdown } from 'react-dropdown'
import { Page } from 'tabler-react'

export const Session = ({ parts = [] }) => {
  const onSelect = () => {
    console.log('hihi')
  }

  const options = parts.map(({ id, name }) => ({
    value: id,
    label: name
  }))

  return (
    <ErrorBoundary>
      <Page.Content title='KỲ HỌP'>
        <Dropdown
          options={options}
          // eslint-disable-next-line react/jsx-no-bind
          onChange={onSelect}
          value={options[0]}
          placeholder='Select an option'
        />
      </Page.Content>
    </ErrorBoundary>
  )
}
