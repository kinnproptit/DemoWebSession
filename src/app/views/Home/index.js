import React from 'react'
import { withRouter } from 'react-router-dom'

import { Page, Card } from 'tabler-react'
import { RenderTable } from './table'

const Home = ({ history }) => {
  return (
    <Page.Content title='KỲ HỌP'>
      <Card>
        <Card.Body>
          <RenderTable history={history} />
        </Card.Body>
      </Card>
    </Page.Content>
  )
}

export default withRouter(Home)
