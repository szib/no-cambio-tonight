import React from 'react';

import { Header, Container } from 'semantic-ui-react';

import useProfile from '../hooks/useProfile';

const EventsPage = () => {
  const [profile] = useProfile(localStorage.getItem('token'));
  console.log('profile', profile);
  return (
    <Container>
      <Header as="h1">Events</Header>
    </Container>
  );
};

export default EventsPage;
