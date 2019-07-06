import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';

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
          path="/"
          render={routerProps => <SignInPage {...routerProps} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
