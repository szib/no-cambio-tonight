import React from 'react';

import 'semantic-ui-css/semantic.min.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignUpPage from './containers/SignUpPage';
import SignInPage from './containers/SignInPage';
import LandingPage from './containers/LandingPage';
import ProfilePage from './containers/ProfilePage';
import EventsPage from './containers/EventsPage';
import GamesPage from './containers/GamesPage';
import LogoutPage from './containers/LogoutPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={SignUpPage} />
        <Route path="/signin" component={SignInPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/events" component={EventsPage} />
        <Route path="/games" component={GamesPage} />
        <Route path="/logout" component={LogoutPage} />
      </Switch>
      <Route exact path="/" component={LandingPage} />
    </Router>
  );
}

export default App;
