import React from 'react';

import { Card } from 'semantic-ui-react';

import GameCard from './GameCard';

const GameCards = props => {
  const {
    gamePieces,
    onClickHandler,
    itemsPerRow,
    eventCancelled,
    editable
  } = props;

  const handleClick = gamePiece => {
    if (editable && !eventCancelled && gamePiece.ownedByCurrentUser) {
      onClickHandler(gamePiece.id);
    }
  };

  return (
    <Card.Group size="mini" itemsPerRow={itemsPerRow || 8}>
      {gamePieces &&
        gamePieces.map(gamePiece => {
          return (
            <GameCard
              key={gamePiece.id}
              gamePiece={gamePiece}
              eventCancelled={eventCancelled}
              onClickHandler={handleClick}
            />
          );
        })}
    </Card.Group>
  );
};

export default GameCards;
