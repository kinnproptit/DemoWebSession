/* eslint-disable react/jsx-no-bind */
import React from 'react'

import { Avatar, Icon, Table } from 'tabler-react'

const data = [
  {
    id: 1,
    url: 'http://db.eachclass.net:8000/sessions/1/',
    name: 'Kỳ họp số 1 năm 2020',
    start_date: null,
    end_date: null
  },
  {
    id: 2,
    url: 'http://db.eachclass.net:8000/sessions/2/',
    name: 'Kỳ họp số 2 năm 2020',
    start_date: null,
    end_date: null
  },
  {
    id: 4,
    url: 'http://db.eachclass.net:8000/sessions/4/',
    name: 'Kiểm tra tạo kỳ họp qua app 1',
    start_date: null,
    end_date: null
  },
  {
    id: 5,
    url: 'http://db.eachclass.net:8000/sessions/5/',
    name: 'Kiểm tra tạo kỳ họp qua app 2',
    start_date: null,
    end_date: null
  }
]

export const RenderTable = ({ history }) => {
  const handleClick = ({ id }) => {
    history.push({ pathname: `/session/${id}` })
  }

  const showData = () => {
    return data.map(({ id, name }) => (
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
