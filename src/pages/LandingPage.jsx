import React from 'react';

import { Link } from 'react-router-dom';

import { Container, Header, Button, Icon } from 'semantic-ui-react';

const LandingPage = () => {
  return (
    <Container text textAlign="center">
      <Header
        as="h1"
        content="No Cambio Tonight"
        style={{
          color: 'rgba(255,255,255,.7)',
          textShadow: '3px 5px 2px #474747',
          fontSize: '4em',
          fontFamily: "'Frijole', cursive",
          marginTop: '1.3em'
        }}
      />
      <Header
        inverted
        as="h2"
        content="Sign up and you don't have to play Cambio ever again."
        style={{
          marginTop: '1.5em',
          marginBottom: '1.5em'
        }}
      />
      <Link to="/signin">
        <Button primary size="huge">
          Get started <Icon name="arrow right" />
        </Button>
      </Link>
    </Container>
  );
};

export default LandingPage;
