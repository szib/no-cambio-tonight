import React from 'react';

import { Table, Image, Rating } from 'semantic-ui-react';
import AddRemoveButton from './AddRemoveButton';

const Game = props => {
  const { game, gamePieceId } = props;

  const getStringFor = (min, max) => {
    if (min && max) {
      return min === max ? `${min}` : `${min} - ${max}`;
    } else {
      return 'N/A';
    }
  };

  return (
    <Table.Row>
      <Table.Cell width={2}>
        <Image src={game.imageSmall} size="tiny" centered />
      </Table.Cell>
      <Table.Cell width={2}>{game.name}</Table.Cell>
      <Table.Cell width={2}>
        {game.averageUserRating ? (
          <Rating
            icon="star"
            defaultRating={Math.round(game.averageUserRating)}
            maxRating={5}
            disabled
          />
        ) : (
          'N/A'
        )}
      </Table.Cell>
      <Table.Cell width={2}>
        {getStringFor(game.minPlayers, game.maxPlayers)}
      </Table.Cell>
      <Table.Cell width={2}>
        {getStringFor(game.minPlaytime, game.maxPlaytime)}
      </Table.Cell>
      <Table.Cell width={2}>
        <AddRemoveButton gamePieceId={gamePieceId} game={game} />
      </Table.Cell>
    </Table.Row>
  );
};

export default Game;
