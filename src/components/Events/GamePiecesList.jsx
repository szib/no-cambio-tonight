import React from 'react';

import { Label } from 'semantic-ui-react';

const GameList = props => {
  const { gamePieces, onClickHandler } = props;

  return (
    <div>
      {gamePieces &&
        gamePieces.map(gamePiece => {
          return (
            <Label
              key={gamePiece.id}
              content={gamePiece.game.name}
              color={gamePiece.color}
              onClick={() => onClickHandler(gamePiece.id)}
            />
          );
        })}
    </div>
  );
};

export default GameList;
