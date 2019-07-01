import React from 'react';

import { Grid } from 'semantic-ui-react';
import Game from './Game';

const MyGameList = props => {
  const { gamePieces } = props;

  return (
    <Grid columns={2} celled="internally">
      {gamePieces.map(gamePiece => {
        return (
          <Game
            key={gamePiece.id}
            game={gamePiece.game}
            gamePieceId={gamePiece.id}
          />
        );
      })}
    </Grid>
  );
};

export default MyGameList;
