import React from 'react'
import styled from 'styled-components'

import { Card } from 'tabler-react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

import { MeetingNoteSocket } from './MeetingNodeSocket'

export const PartContainer = ({ options, onSelect, sentences, partId }) => {
  const props = {
    options,
    onSelect,
    sentences,
    partId
  }

  return (
    <React.Fragment>
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
      </Card>
      <MeetingNoteSocket meetingPartId={partId} {...props} />
    </React.Fragment>
  )
}

const Label = styled.span`
  margin-right: 15px;
`
