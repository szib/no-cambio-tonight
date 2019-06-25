import React from 'react';

import { BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route exact path="/events" render={() => <div>Events</div>} />
      <Route path="/events/:id" render={(props) => <div>Event: {props.match.params.id}</div>} />
      <Route path="/games" render={() => <div>Games</div>} />
      <Route exact path="/" render={() => <div>Root</div>} />
    </Router>
  );
}

export default App;
