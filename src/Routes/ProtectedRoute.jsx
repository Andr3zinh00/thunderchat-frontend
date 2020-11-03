import React from 'react';
import { Route, Redirect } from 'react-router';
import HomeProvider from '../Contexts/HomeContext';

const ProtectedRoute = ({ authFunc, redirectToWhere, ...rest }) => {

  const { path } = rest;
  const condition = path === '/home';

  return authFunc() ? condition ?
    <HomeProvider>
      <Route {...rest} />
    </HomeProvider>
    :
    <Route {...rest} />
    :
    <Redirect to={redirectToWhere} />
}
export default ProtectedRoute;
