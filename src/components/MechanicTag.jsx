import React from 'react';

import { Icon, Label } from 'semantic-ui-react';

const MechanicTag = ({ name }) => {
  return (
    <Label>
      <Icon name="settings" />
      {name}
    </Label>
  );
};

export default MechanicTag;
