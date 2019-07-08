import React from 'react';

import { Icon, Label } from 'semantic-ui-react';

const CategoryTag = ({ name }) => {
  return (
    <Label>
      <Icon name="tag" />
      {name}
    </Label>
  );
};

export default CategoryTag;
