import React, { useContext } from 'react';
import { MyGamesContext } from '../../lib/context';

import { Container } from 'semantic-ui-react';
import Game from './Game';
import GamesTable from './GamesTable';

const Games = props => {
  const { games } = props;
  const myGames = useContext(MyGamesContext);

  const findGamePieceIdByBgaId = bgaId => {
    const gp = myGames.gamePieces.filter(myGame => myGame.game.bgaId === bgaId);
    if (gp.length === 0) return null;
    return gp[0].id;
  };

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
