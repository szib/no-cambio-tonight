import React from 'react';

import { Table, Image, Rating } from 'semantic-ui-react';

const MyGame = props => {
  const { gamePiece } = props;
  const { game } = gamePiece;

  return (
    <>
      <Table.Row onClick={() => props.history.push(`/mygames/${gamePiece.id}`)}>
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
          {game.minPlayers && game.maxPlayers
            ? `${game.minPlayers} - ${game.maxPlayers}`
            : 'N/A'}
        </Table.Cell>
        <Table.Cell width={2}>
          {game.minPlaytime && game.maxPlaytime
            ? `${game.minPlaytime} - ${game.maxPlaytime}`
            : 'N/A'}
        </Table.Cell>
      </Table.Row>
    </>
  );
};

export default MyGame;
