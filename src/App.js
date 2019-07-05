import React from 'react';

import 'semantic-ui-css/semantic.min.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MyGamePage from './pages/MyGamePage/MyGamePage';
import MyGamesPage from './pages/MyGamesPage/MyGamesPage';
import FindAGamePage from './pages/FindAGamePage/FindAGamePage';
import EventPage from './pages/EventPage/EventPage';

import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import LandingPage from './pages/LandingPage';
import ProfilePage from './pages/ProfilePage';
import EventsPage from './pages/EventsPage/EventsPage';
import NewEventPage from './pages/NewEventPage';
import LogoutPage from './pages/LogoutPage';
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
          exact
          path="/events/new"
          render={routerProps => <NewEventPage {...routerProps} />}
        />
        <Route
          exact
          path="/events/:id"
          render={routerProps => <EventPage {...routerProps} />}
        />
        <Route
          path="/events"
          render={routerProps => <EventsPage {...routerProps} />}
        />
        <Route
          path="/findgame"
          render={routerProps => <FindAGamePage {...routerProps} />}
        />
        <Route
          path="/mygames/:id"
          render={routerProps => <MyGamePage {...routerProps} />}
        />
        <Route
          exact
          path="/mygames"
          render={routerProps => <MyGamesPage {...routerProps} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
