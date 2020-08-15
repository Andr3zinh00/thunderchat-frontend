import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Landing from '../Pages/Landing/Landing.Page';
import SignUp from '../Pages/SignUp/SignUp.Page';
import Home from '../Pages/Home/Home.Page';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  )
}

export default Routes;
