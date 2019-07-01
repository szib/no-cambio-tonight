import React from 'react';

import { Button } from 'semantic-ui-react';

const AddRemoveButton = ({
  loading,
  addHandler,
  removeHandler,
  gamePieceId
}) => {
  if (gamePieceId) {
    return (
      <Button primary fluid loading={loading} onClick={removeHandler}>
        Remove
      </Button>
    );
  } else {
    return (
      <Button primary fluid loading={loading} onClick={addHandler}>
        Add to my game library
      </Button>
    );
  }
};

export default AddRemoveButton;
