import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from './auth/auth';

const PrivateRoute = function ({component: Component, ...rest}) {

  let authed = isAuthenticated();

    return (
      <Route
        {...rest}
        render={(props) => authed === true
          ? <Component {...props} />
          : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
      />
    )
}

export default PrivateRoute;