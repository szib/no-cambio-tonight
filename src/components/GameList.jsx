import React from 'react';

import { Segment, List } from 'semantic-ui-react';
import Game from '../components/Game';

const GameList = props => {
  const { games, findGamePieceIdByBgaId } = props;

  const gamePieces = games.map(game => {
    return {
      id: findGamePieceIdByBgaId(game.bgaId),
      game
    };
  });

  return (
    <Segment>
      <List divided relaxed>
        {gamePieces.map(gamePiece => {
          return (
            <Game
              key={gamePiece.game.bgaId}
              game={gamePiece.game}
              gamePieceId={gamePiece.id}
            />
          );
        })}
      </List>
    </Segment>
  );
};

export default GameList;
