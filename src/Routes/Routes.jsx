import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Landing from '../Pages/Landing/Landing.Page';
import SignUp from '../Pages/SignUp/SignUp.Page';
import Home from '../Pages/Home/Home.Page';
import Header from '../Components/Header/Header.component';
import Footer from '../Components/Footer/Footer.component';
import User from '../Pages/User/User.Page';
import UserSettings from '../Pages/UserSettings/UserSettings.Page';
import Notifications from '../Pages/Notifications/Notifications.Page';
import ProtectedRoute from './ProtectedRoute';
// import socketio from '../services/Socket';

import { getReduxState } from '../utils/utils';

const Routes = () => {

  const user = useSelector(state => state.userReducer);

  useEffect(() => {
    console.log(user);
    if (user.mention) {
      // socketio.emit('connected', { mention: user.mention });
    }
    //eslint-disable-next-line
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        <ProtectedRoute
          exact
          authFunc={() => !getReduxState("u")}
          redirectToWhere='/home'
          path="/"
          component={Landing}
        />
        <ProtectedRoute
          authFunc={() => !getReduxState("u")}
          redirectToWhere='/home'
          path="/sign-up"
          component={SignUp}
        />
        <ProtectedRoute
          authFunc={() => getReduxState("u")}
          redirectToWhere='/'
          path="/home"
          component={Home}
        />
        <ProtectedRoute
          authFunc={() => getReduxState("u")}
          redirectToWhere='/'
          path="/user"
          component={User}
        />
        <ProtectedRoute
          authFunc={() => getReduxState("u")}
          redirectToWhere='/'
          path="/settings"
          component={UserSettings}
        />
        <ProtectedRoute
          authFunc={() => getReduxState("u")}
          redirectToWhere='/'
          path="/notifications"
          component={Notifications}
        />
      </Switch>
      <Footer />
    </Router>
  )
}

export default Routes;
