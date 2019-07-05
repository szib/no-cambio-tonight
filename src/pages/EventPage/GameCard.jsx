import React from 'react';

import { List, Image, Popup } from 'semantic-ui-react';

const GameCard = props => {
  const { gamePiece, onClickHandler } = props;
  const { game } = gamePiece;
  console.log('props', props);
  return (
    <Popup
      header={game.name}
      content={game.name}
      trigger={
        <List.Item
          key={gamePiece.id}
          content={gamePiece.game.name}
          color={gamePiece.color}
          onClick={() => onClickHandler(gamePiece.id)}
        >
          <Image src={game.imageSmall} size="mini" />
        </List.Item>
      }
    />
  );
};

export default GameCard;
