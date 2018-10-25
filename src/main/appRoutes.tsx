import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Search from '../components/search';

const AppRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Search} />
      <Route path='/search' component={Search} />
      <Redirect to="/search" />
    </Switch>
  </BrowserRouter>
)

export default AppRoutes;