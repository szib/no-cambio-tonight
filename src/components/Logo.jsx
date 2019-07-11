import React from 'react';

import { Grid, Header } from 'semantic-ui-react';

const style = {
  fontSize: '6rem',
  fontFamily: "'Frijole', cursive"
};

const Logo = () => {
  return (
    <Header as="h1" style={style}>
      No Cambio Tonight
    </Header>
  );
};

export default Logo;
