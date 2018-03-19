import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import App from 'components/app';

export default () => (
  <Router>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/scoreboard" component={App} exact />
      <Route path="/boards" component={App} exact />
      <Route path="/board/:uuid" component={App} exact />
      <Redirect to="/" />
    </Switch>
  </Router>
);
