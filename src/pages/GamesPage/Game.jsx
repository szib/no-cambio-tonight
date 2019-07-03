import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { asyncAddGameToMyGameLibray } from '../../redux/thunk/myGames';

import { Table, Image, Rating, Button } from 'semantic-ui-react';

const Game = props => {
  const { game, gamePieceId } = props;

  const dispatch = useDispatch();
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const addGame = () => {
    setIsButtonLoading(true);
    dispatch(asyncAddGameToMyGameLibray(game.bgaId)).then(gamePiece => {
      setIsButtonLoading(false);
    });
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
        {game.minPlayers && game.maxPlayers
          ? `${game.minPlayers} - ${game.maxPlayers}`
          : 'N/A'}
      </Table.Cell>
      <Table.Cell width={2}>
        {game.minPlaytime && game.maxPlaytime
          ? `${game.minPlaytime} - ${game.maxPlaytime}`
          : 'N/A'}
      </Table.Cell>
      <Table.Cell width={2}>
        <Button
          icon="add"
          content="Add"
          loading={isButtonLoading}
          onClick={addGame}
          disabled={gamePieceId !== null}
        />
      </Table.Cell>
    </Table.Row>
  );
};

export default Game;
