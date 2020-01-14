import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { LoadingIndicator } from 'ui'
import loadable from '@loadable/component'

import store from './app/redux'

import 'tabler-react/dist/Tabler.css'
import 'font-awesome/css/font-awesome.min.css'

// const Bootstrap = loadable.lib(() =>
//   import('bootstrap/dist/css/bootstrap.min.css')
// )
const AppComponent = loadable(() => import('./App'), {
  // eslint-disable-next-line react/jsx-filename-extension
  fallback: LoadingIndicator
})

render(
  <Provider store={store}>
    {/* <Bootstrap /> */}
    <AppComponent />
  </Provider>,
  document.querySelector('#app')
)
