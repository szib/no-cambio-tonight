import React from 'react';

import { Segment, List } from 'semantic-ui-react';
import Game from './Game';

const MyGameList = props => {
  const { gamePieces } = props;

  return (
    <Segment>
      <List divided relaxed>
        {gamePieces.map(gamePiece => {
          return (
            <Game
              key={gamePiece.id}
              game={gamePiece.game}
              gamePieceId={gamePiece.id}
            />
          );
        })}
      </List>
    </Segment>
  );
};

export default MyGameList;
