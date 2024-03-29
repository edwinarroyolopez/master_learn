import React from 'react';
import { Route, Redirect } from 'react-router-dom';
console.log('private route => localuser: ',  localStorage.getItem('user'));
export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route { ...rest } render={props => (
    localStorage.getItem('user')
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
  )} />
);
