import React from 'react';

import { Button, Icon } from 'semantic-ui-react';

const AddRemoveButton = ({
  loading,
  addHandler,
  removeHandler,
  gamePieceId
}) => {
  if (gamePieceId) {
    return (
      <Button
        loading={loading}
        color="red"
        inverted
        icon
        onClick={removeHandler}
      >
        <Icon name="remove" alt="Remove from my game library" />
      </Button>
    );
  } else {
    return (
      <Button
        loading={loading}
        color="green"
        inverted
        icon
        onClick={addHandler}
      >
        <Icon name="add" alt="Add to my game library" />
      </Button>
    );
  }
};

export default AddRemoveButton;
