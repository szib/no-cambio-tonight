import React from 'react';

import { Icon, Label } from 'semantic-ui-react';

const Tag = ({ name, iconName, color }) => {
  return (
    <Label color={color}>
      <Icon name={iconName} />
      {name}
    </Label>
  );
};

export default Tag;
