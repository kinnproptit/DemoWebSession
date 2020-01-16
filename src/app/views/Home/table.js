/* eslint-disable react/jsx-no-bind */
import React, { useContext } from 'react'

import { Avatar, Icon, Table } from 'tabler-react'
import { PreloaderContext } from '../Preloader'

export const RenderTable = ({ history }) => {
  const { sessions } = useContext(PreloaderContext)

  const handleClick = ({ id }) => {
    history.push({ pathname: `/session/${id}` })
  }

  const showData = () => {
    return sessions.map(({ id, name }) => (
      <Table.Row>
        <Table.Col className='w-1'>
          <Avatar>{id}</Avatar>
        </Table.Col>
        <Table.Col>
          <b>{name}</b>
        </Table.Col>
        <Table.Col></Table.Col>
        <Table.Col className='text-nowrap'>
          <span className='status-icon bg-success' /> active
        </Table.Col>
        <Table.Col className='w-1'>
          <Icon link name='trash' onClick={() => handleClick({ id })} />
        </Table.Col>
      </Table.Row>
    ))
  }

  return (
    <Table cards striped responsive className='table-vcenter'>
      <Table.Header>
        <Table.Row>
          <Table.ColHeader>STT</Table.ColHeader>
          <Table.ColHeader colSpan={2}>Tên kỳ họp</Table.ColHeader>
          <Table.ColHeader>Trạng thái</Table.ColHeader>
          <Table.ColHeader />
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {showData()}
        {/* <Table.Row>
          <Table.Col>
            <Avatar>2</Avatar>
          </Table.Col>
          <Table.Col>
            <b>
              Main structure Main structure Main structure Main structure Main
              structure
            </b>
          </Table.Col>
          <Table.Col></Table.Col>
          <Table.Col className='text-nowrap'>
            <span className='status-icon bg-danger' /> inactive
          </Table.Col>
          <Table.Col>
            <Icon link name='trash' onClick={() => handleClick()} />
          </Table.Col>
        </Table.Row> */}
      </Table.Body>
    </Table>
  )
}
