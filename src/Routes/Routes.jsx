import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Landing from '../Pages/Landing/Landing.Page';
import SignUp from '../Pages/SignUp/SignUp.Page';
import Home from '../Pages/Home/Home.Page';
import Header from '../Components/Header/Header.component';
import Footer from '../Components/Footer/Footer.component';
import User from '../Pages/User/User.Page';
import UserSettings from '../Pages/UserSettings/UserSettings.Page';
import Notifications from '../Pages/Notifications/Notifications.Page';
import ProtectedRoute from './ProtectedRoute';

import { useSelector } from 'react-redux';
import { getReduxState } from '../utils/utils';
import connect, { connection } from '../services/Socket';
import HomeProvider from '../Contexts/HomeContext';

const Routes = () => {

  const { _id, token } = useSelector(state => state.userReducer);
  useEffect(() => {
    console.log(_id, token);
    if (_id) {
      console.log("entrei");
      connect();
    }
  }, [_id, connection.client]);

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
