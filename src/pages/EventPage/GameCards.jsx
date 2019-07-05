import React from 'react';

import { List } from 'semantic-ui-react';

import GameCard from './GameCard';

const GameCards = props => {
  const { gamePieces, onClickHandler } = props;

  return (
    <List horizontal animated size="mini">
      {gamePieces &&
        gamePieces.map(gamePiece => {
          return (
            <GameCard
              key={gamePiece.id}
              gamePiece={gamePiece}
              onClickHandler={onClickHandler}
            />
          );
        })}
    </List>
  );
};

export default GameCards;
