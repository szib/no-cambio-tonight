import React from 'react';

import { Container } from 'semantic-ui-react';
import Game from './Game';
import GamesTable from './GamesTable';

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
      <GamesTable>
        {gamePieces.map(gamePiece => {
          return (
            <Game
              key={gamePiece.game.bgaId}
              game={gamePiece.game}
              gamePieceId={gamePiece.id}
            />
          );
        })}
      </GamesTable>
    </Container>
  );
};

export default Games;
