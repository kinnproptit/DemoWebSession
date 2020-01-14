import React from 'react'

import { ErrorBoundary } from 'ui'
import { Page } from 'tabler-react'

export default () => {
  return (
    <ErrorBoundary>
      <Page.Content title='STREAMING'></Page.Content>
    </ErrorBoundary>
  )
}
