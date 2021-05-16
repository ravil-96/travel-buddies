import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'

function PrivateRoute({ component: Component, ...rest }) {
  const loggedIn = useSelector((state) => state.login.logged_in);
  return (
    <Route
      render={() =>
        !!loggedIn ? <Component {...rest} /> : <Redirect to="/" />
      }
    />
  );
}


export default PrivateRoute;