import React from 'react';

import Menu from '../components/Menu';

import { Header, Container } from 'semantic-ui-react';

const EventsPage = () => {
  return (
    <Container>
      <Menu></Menu>
      <Header as="h1">Events</Header>
    </Container>
  );
};

export default EventsPage;
