import React from 'react';

import { List, Rating } from 'semantic-ui-react';

const GameDetails = ({ game }) => {
  return (
    <List>
      {game.publisher && <List.Item>{`${game.publisher}`}</List.Item>}
      {game.yearPublished && <List.Item>{game.yearPublished}</List.Item>}
      {game.averageUserRating && (
        <Rating
          icon="star"
          defaultRating={Math.round(game.averageUserRating)}
          maxRating={5}
          disabled
        />
      )}
      {game.minPlayers && game.maxPlayers && (
        <List.Item>
          Players: {game.minPlayers} - {game.maxPlayers}
        </List.Item>
      )}
      {game.minPlaytime && game.maxPlaytime && (
        <List.Item>
          Playtime: {game.minPlaytime} - {game.maxPlaytime} mins
        </List.Item>
      )}
    </List>
  );
};

export default GameDetails;
