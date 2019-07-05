import React from 'react';

import { Icon, Label } from 'semantic-ui-react';

const PlayersLabel = ({ game }) => {
  const getPlayers = game => {
    if (game.minPlayers === game.maxPlayers) {
      return `${game.minPlayers} players`;
    } else {
      return `${game.minPlayers} - ${game.maxPlayers} players`;
    }
  };

  if (!(game.minPlayers && game.maxPlayers)) return null;

  return (
    <Label>
      <Icon name="user" />
      {getPlayers(game)}
    </Label>
  );
};

export default PlayersLabel;
