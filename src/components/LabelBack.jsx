import React from 'react';

import { Link, withRouter } from 'react-router-dom';

import { Label, Icon } from 'semantic-ui-react';

const LabelBack = props => {
  return (
    <Label
      corner="left"
      color="blue"
      as={Link}
      to=""
      onClick={() => props.history.goBack()}
    >
      <Icon name="arrow left" />
    </Label>
  );
};

export default withRouter(LabelBack);
