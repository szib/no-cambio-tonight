import React from 'react';

import useAPI from '../hooks/useAPI';
import useAuthentication from '../hooks/useAuthentication';
import useProfile from '../hooks/useProfile';

import { Header, Container, Segment } from 'semantic-ui-react';

import EventTable from '../pages/EventsPage/EventsTable';

const initialUpcomingEventsData = {
  user: {
    attendedEvents: [],
    organisedEvents: []
  }
};

const DashboardPage = props => {
  useAuthentication();
  const upcomingEventsAPI = useAPI(
    'http://localhost:3030/api/v1/upcomingEvents',
    initialUpcomingEventsData
  );
  const [profile] = useProfile(localStorage.getItem('token'));

  const { user } = profile;
  const { organisedEvents, attendedEvents } = upcomingEventsAPI.data.user;
  return (
    <Container>
      <Segment>
        <Header>Hello, {user.fullName}!</Header>
      </Segment>

      <Segment>
        <Header content="You are hosting" />
        <EventTable events={organisedEvents} {...props} />
      </Segment>
      <Segment>
        <Header content="You are attending" />
        <EventTable events={attendedEvents} {...props} />
      </Segment>
    </Container>
  );
};

export default DashboardPage;
