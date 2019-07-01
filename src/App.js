import React from 'react';

import 'semantic-ui-css/semantic.min.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignUpPage from './containers/SignUpPage';
import SignInPage from './containers/SignInPage';
import LandingPage from './containers/LandingPage';
import ProfilePage from './containers/ProfilePage';
import EventsPage from './containers/EventsPage';
import NewEventPage from './containers/NewEventPage';
import MyGamesPage from './containers/MyGamesPage';
import GamesPage from './containers/GamesPage';
import LogoutPage from './containers/LogoutPage';
import Menu from './components/Menu';

function App() {
  return (
    <Router>
      <Menu></Menu>
      <Switch>
        <Route
          exact
          path="/signup"
          render={routerProps => <SignUpPage {...routerProps} />}
        />
        <Route
          exact
          path="/signin"
          render={routerProps => <SignInPage {...routerProps} />}
        />
        <Route
          exact
          path="/logout"
          render={routerProps => <LogoutPage {...routerProps} />}
        />
        <Route
          exact
          path="/"
          render={routerProps => <LandingPage {...routerProps} />}
        />
        <Route
          path="/profile"
          render={routerProps => <ProfilePage {...routerProps} />}
        />
        <Route
          path="/events/new"
          render={routerProps => <NewEventPage {...routerProps} />}
        />
        <Route
          path="/events"
          render={routerProps => <EventsPage {...routerProps} />}
        />
        <Route
          path="/games"
          render={routerProps => <GamesPage {...routerProps} />}
        />
        <Route
          path="/mygames"
          render={routerProps => <MyGamesPage {...routerProps} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
