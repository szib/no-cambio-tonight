import React from 'react';
import useAuthentication from '../hooks/useAuthentication';

import { Container, Segment, Header } from 'semantic-ui-react';

import useProfile from '../hooks/useProfile';
import useAPI from '../hooks/useAPI';

import Loader from '../components/LoaderWithDimmer';
import UserInfo from '../components/UserInfo';
import EventTable from '../pages/EventsPage/EventsTable';

const initialUpcomingEventsData = {
  user: {
    attendedEvents: [],
    organisedEvents: []
  }
};

const ProfilePage = props => {
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
        {profile.loading || upcomingEventsAPI.isLoading ? (
          <Loader content="Loading profile..." />
        ) : (
          <>
            <Segment>
              <UserInfo user={user} />
            </Segment>
            <Segment>
              <Header content="Organised events" />
              <EventTable events={organisedEvents} {...props} />
            </Segment>
            <Segment>
              <Header content="Attended events" />
              <EventTable events={attendedEvents} {...props} />
            </Segment>
          </>
        )}
      </Segment>
    </Container>
  );
};

export default ProfilePage;
