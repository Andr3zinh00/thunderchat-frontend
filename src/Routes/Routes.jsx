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

import { useDispatch, useSelector } from 'react-redux';
import { connect } from '../redux/Socket/Socket.actions';
import { onNotification } from '../redux/User/User.actions';
import { getReduxState } from '../utils/utils';

const Routes = () => {

  const { _id, token } = useSelector(state => state.userReducer);
  const { connection } = useSelector(state => state.socketReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(_id, token, connection);
    if (_id) {
      console.log("entrei");
      dispatch(connect(
        (eventRes) => {
          console.log("Callback")
          const message = JSON.parse(eventRes.body);
          dispatch(onNotification([{
            ...message,
            isLive: true
          }]));
        },
        () => {
          console.log("asdasdasdasd");
        }));
      // Axios.interceptors.request.use(function (config) {
      //   const token = getAuth();
      //   config.headers.Authorization = token.headers.Authorization;
      //   return config;
      // });
    }
  }, [_id]);

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
