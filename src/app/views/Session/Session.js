import React, { useContext } from 'react'
import styled from 'styled-components'
import { ErrorBoundary } from 'ui'

import Dropdown from 'react-dropdown'
import { Page, Card } from 'tabler-react'
import 'react-dropdown/style.css'

import { Part } from '../Part/Part'

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
        <Card>
          <Card.Header>
            <Label>Phiên họp</Label>
            <Dropdown
              key={Math.random()}
              options={options}
              // eslint-disable-next-line react/jsx-no-bind
              onChange={onSelect}
              value={options[0]}
              placeholder='Select an option'
            />
          </Card.Header>
          <Card.Body>
            <Part sentences={sentences} />
          </Card.Body>
        </Card>
      </Page.Content>
    </ErrorBoundary>
  )
}

const Label = styled.span`
  margin-right: 15px;
`
