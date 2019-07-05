import React from 'react';

import { Button, Icon } from 'semantic-ui-react';

const LikeButton = ({ loading, clickHandler, isLiked }) => {
  return (
    <Button
      loading={loading}
      color="red"
      inverted={!isLiked}
      icon
      onClick={clickHandler}
    >
      <Icon name="heart" alt="Like" />
    </Button>
  );
};

export default LikeButton;
