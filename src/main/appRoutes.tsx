import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Search from '../components/search';
import User from '../components/grid/user';

const AppRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Search} />
      <Route path="/search" component={Search} /> 
      <Route path="/user/:userLogin" component={User} /> 
    </Switch>
  </BrowserRouter>
)

export default AppRoutes;