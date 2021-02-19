import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={''} />
      <Route exact path="/signup" component={''} />
      <Route exact path="/dashboard" component={''} />
    </Switch>
  </Router>
);

export default Routes;
