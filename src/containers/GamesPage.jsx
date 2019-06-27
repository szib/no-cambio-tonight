import React from 'react';

import Menu from '../components/Menu';

import { Header, Container } from 'semantic-ui-react';

const GamesPage = () => {
  return (
    <Container>
      <Menu></Menu>
      <Header as="h1">Games</Header>
    </Container>
  );
};

export default GamesPage;
