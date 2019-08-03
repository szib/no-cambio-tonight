import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import LandingPage from './pages/LandingPage';

function UnauthenticatedApp({ authentication }) {
  console.log(
    '%c << UNAUTHENTICATED APP >>',
    'color: #222; background: #bada55; font-weight: bold;'
  );

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/signup"
          render={routerProps => (
            <SignUpPage {...routerProps} authentication={authentication} />
          )}
        />
        <Route
          path="/signin"
          render={routerProps => (
            <SignInPage {...routerProps} authentication={authentication} />
          )}
        />
        <Route
          path="/"
          render={routerProps => <LandingPage {...routerProps} />}
        />
      </Switch>
    </Router>
  );
}

export default UnauthenticatedApp;
