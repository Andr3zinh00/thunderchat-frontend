import React from 'react';
import { Route, Redirect } from 'react-router';

const ProtectedRoute = ({ authFunc, redirectToWhere, ...rest }) => {
  return authFunc() ? <Route {...rest} /> : <Redirect to={redirectToWhere} />
}
export default ProtectedRoute;
