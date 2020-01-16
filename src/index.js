import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { LoadingIndicator } from 'ui'
import loadable from '@loadable/component'

import store from './app/redux'

import 'tabler-react/dist/Tabler.css'
import 'font-awesome/css/font-awesome.min.css'

import { Preloader } from './app/views/Preloader'

// const Bootstrap = loadable.lib(() =>
//   import('bootstrap/dist/css/bootstrap.min.css')
// )
const AppComponent = loadable(() => import('./App'), {
  // eslint-disable-next-line react/jsx-filename-extension
  fallback: LoadingIndicator
})

render(
  <Preloader>
    <Provider store={store}>
      {/* <Bootstrap /> */}
      <AppComponent />
    </Provider>
  </Preloader>,
  document.querySelector('#app')
)
