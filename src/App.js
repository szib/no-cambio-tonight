import React from 'react';

import 'semantic-ui-css/semantic.min.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import SignUpPage from './containers/SignUpPage'
import SignInPage from './containers/SignInPage'
import LandingPage from './containers/LandingPage';
import ProfilePage from './containers/ProfilePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/signup' component={SignUpPage} />
        <Route path='/signin' component={SignInPage} />
        <Route path='/profile' component={ProfilePage} />
        {/* <Route exact path="/events" render={() => <div>Events</div>} />
        <Route path="/events/:id" render={(props) => <div>Event: {props.match.params.id}</div>} />
        <Route path="/games" render={() => <div>Games</div>} /> */}
      </Switch>
      <Route exact path="/" component={LandingPage} />
    </Router>
  );
}

export default App;
