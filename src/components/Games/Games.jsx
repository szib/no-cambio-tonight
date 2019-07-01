import React from 'react';

import { Container } from 'semantic-ui-react';
import Game from './Game';

const Games = props => {
  const { games, findGamePieceIdByBgaId } = props;

  const gamePieces = games.map(game => {
    return {
      id: findGamePieceIdByBgaId(game.bgaId),
      game
    };
  });

  return (
    <Container>
      {gamePieces.map(gamePiece => {
        return (
          <Game
            key={gamePiece.game.bgaId}
            game={gamePiece.game}
            gamePieceId={gamePiece.id}
          />
        );
      })}
    </Container>
  );
};

export default Games;
