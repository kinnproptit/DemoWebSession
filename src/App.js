import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Redirect
} from 'react-router-dom'

import { LoadingIndicator } from 'ui'

import loadable from '@loadable/component'
import routes from './app/config/routes.config'

import { PrivateRoute } from './app/components/PrivateRoute'
import { DefaultNavbar } from './app/components/DefaultNavbar'

const AsyncPage = loadable(props => import(`./app/views/${props.page}`), {
  fallback: LoadingIndicator
})

const App = () => (
  <Router>
    <Switch>
      <DefaultNavbar routes={routes}>
        {routes.map(({ component, exact, label, path, isPrivate }) =>
          isPrivate ? (
            <PrivateRoute exact={exact} key={label} path={path}>
              <AsyncPage page={component} />
            </PrivateRoute>
          ) : (
            <Route exact={exact} key={label} path={path}>
              <AsyncPage page={component} />
            </Route>
          )
        )}
        {/* <Redirect to='/' /> */}
      </DefaultNavbar>
    </Switch>
  </Router>
)

export default App
