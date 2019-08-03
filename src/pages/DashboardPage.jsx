import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import useAPI from '../hooks/useAPI';

import { ProfileContext } from '../lib/context';

import { Header, Container, Segment } from 'semantic-ui-react';

import EventTable from '../pages/EventsPage/EventsTable';
import GameLibrary from '../components/GameLibrary';
import Loader from '../components/LoaderWithDimmer';

const apiConfig = {
  url: 'http://localhost:3030/api/v1/upcomingEvents',
  initialData: {
    user: {
      attendedEvents: [],
      organisedEvents: []
    }
  }
};

const DashboardPage = props => {
  const profile = useContext(ProfileContext);
  const { data, isLoading } = useAPI(apiConfig);
  const { user } = profile;
  const { organisedEvents, attendedEvents } = data.user;

  if (isLoading) return <Loader />;

  return (
    <Container>
      <Segment>
        <Header>Hello, {user.fullName}!</Header>
        {user.numberOfOwnedGames === 0 && (
          <Header as="h4">
            You have no games in your game library. Try to{' '}
            <Link to="/findgame">find</Link> a few games and add it to the
            library.
          </Header>
        )}
      </Segment>

      {user && user.id && user.numberOfOwnedGames > 0 && (
        <Segment>
          <GameLibrary user={user} />
        </Segment>
      )}

      <Segment>
        <Header content="Events you are hosting" />
        <EventTable events={organisedEvents} {...props} />
      </Segment>
      <Segment>
        <Header content="Events you are attending" />
        <EventTable events={attendedEvents} {...props} />
      </Segment>
    </Container>
  );
};

export default DashboardPage;
