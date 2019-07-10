import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MyGamePage from './pages/MyGamePage/MyGamePage';
import MyGamesPage from './pages/MyGamesPage/MyGamesPage';
import FindAGamePage from './pages/FindAGamePage/FindAGamePage';
import EventPage from './pages/EventPage/EventPage';

import UserPage from './pages/UserPage';
import EventsPage from './pages/EventsPage/EventsPage';
import NewEventPage from './pages/NewEventPage';
import LogoutPage from './pages/LogoutPage';
import DashboardPage from './pages/DashboardPage';
import GameItemPage from './pages/GameItemPage';
import Menu from './components/Menu';

function App() {
  return (
    <>
      <Router>
        <Menu></Menu>
        <Switch>
          <Route
            exact
            path="/logout"
            render={routerProps => <LogoutPage {...routerProps} />}
          />
          <Route
            path="/users/:id"
            render={routerProps => <UserPage {...routerProps} />}
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
            path="/gameitems/:id"
            render={routerProps => <GameItemPage {...routerProps} />}
          />
          <Route
            exact
            path="/mygames"
            render={routerProps => <MyGamesPage {...routerProps} />}
          />
          <Route
            path="/"
            render={routerProps => <DashboardPage {...routerProps} />}
          />
        </Switch>
        <div style={{ height: '42px' }}></div>
      </Router>
    </>
  );
}

export default App;
