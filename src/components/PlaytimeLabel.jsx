import React from 'react';

import { Icon, Label } from 'semantic-ui-react';

const PlaytimeLabel = ({ game }) => {
  if (!(game.minPlaytime && game.maxPlaytime)) return null;

  return (
    <Label>
      <Icon name="clock" />
      {game.minPlaytime} - {game.maxPlaytime} minutes
    </Label>
  );
};

export default PlaytimeLabel;
