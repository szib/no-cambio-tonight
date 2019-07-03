import React, { useState } from 'react';

import { Container, Table } from 'semantic-ui-react';

import GameTable from '../../components/GamesTable';
import MyGame from './MyGame';

const MyGameList = props => {
  const { gamePieces } = props;

  return (
    <Container>
      <GameTable>
        {gamePieces.map(gamePiece => {
          return (
            <MyGame
              key={gamePiece.game.bgaId}
              gamePiece={gamePiece}
              {...props}
            />
          );
        })}
      </GameTable>
    </Container>
  );
};

export default MyGameList;
