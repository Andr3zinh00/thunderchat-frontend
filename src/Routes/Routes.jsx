import React, { useEffect } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

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
import { getReduxState } from '../utils/utils';
import connect from '../services/Socket';
import { connectedToWebsocket } from '../redux/SideEffects/SideEffects.actions';
import NotFound from '../Pages/NotFound/NotFound.Page';
import { useToggleThemeContext } from '../Contexts/ToggleThemeContext';

const Routes = () => {

  const { _id } = useSelector(state => state.userReducer);

  const dispatch = useDispatch();
  const { theme } = useToggleThemeContext();

  function connectCallback() {
    dispatch(connectedToWebsocket())
  }

  useEffect(() => {

    if (_id) {
      connect(connectCallback);
    }
    
  }, [_id]);

  return (
    <ThemeProvider theme={theme}>
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
          <Route path="/404" component={NotFound} />
          <Redirect to={{ pathname: "/404" }} />
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}

export default Routes;
