import React from 'react';

import { Card } from 'semantic-ui-react';

import GameCard from './GameCard';

const GameCards = props => {
  const { gamePieces, onClickHandler, itemsPerRow, eventCancelled } = props;

  return (
    <Card.Group size="mini" itemsPerRow={itemsPerRow || 8}>
      {gamePieces &&
        gamePieces.map(gamePiece => {
          return (
            <GameCard
              key={gamePiece.id}
              gamePiece={gamePiece}
              eventCancelled={eventCancelled}
              onClickHandler={eventCancelled ? () => {} : onClickHandler}
            />
          );
        })}
    </Card.Group>
  );
};

export default GameCards;
