import React from 'react'
import { BrowserRouter, Switch, hashHistory, Route } from 'react-router-dom'
import { MainContainer } from 'containers'

const routes = (
  <BrowserRouter history={hashHistory}>
    <Switch>
      <Route path='/' component={MainContainer} />
    </Switch>
  </BrowserRouter>
)

export default routes
