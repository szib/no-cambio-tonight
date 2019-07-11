import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/signup"
          render={routerProps => <SignUpPage {...routerProps} />}
        />
        <Route
          path="/signin"
          render={routerProps => <SignInPage {...routerProps} />}
        />
        <Route
          path="/"
          render={routerProps => <LandingPage {...routerProps} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
