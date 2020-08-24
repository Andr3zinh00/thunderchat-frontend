import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Landing from '../Pages/Landing/Landing.Page';
import SignUp from '../Pages/SignUp/SignUp.Page';
import Home from '../Pages/Home/Home.Page';
import Header from '../Components/Header/Header.component';
import Footer from '../Components/Footer/Footer.component';
import User from '../Pages/User/User.Page';
import UserSettings from '../Pages/UserSettings/UserSettings.Page';
import Notifications from '../Pages/Notifications/Notifications.Page';

const Routes = () => {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/home" component={Home} />
        <Route path="/user" component={User} />
        <Route path="/settings" component={UserSettings} />
        <Route path="/notifications" component={Notifications} />
      </Switch>
      <Footer/>
    </Router>
  )
}

export default Routes;
