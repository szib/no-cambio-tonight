import React from 'react';

import { Card, Image, Popup, Divider } from 'semantic-ui-react';

import Tags from '../../components/Tags/Tags';

const GameCard = props => {
  const { gamePiece, onClickHandler } = props;
  const { game } = gamePiece;

  return (
    <Card
      as="a"
      key={gamePiece.id}
      color={gamePiece.ownedByCurrentUser ? 'red' : 'blue'}
      onClick={() => onClickHandler(gamePiece)}
    >
      <Popup
        header={game.name}
        trigger={
          <Image
            src={game.imageSmall}
            size="tiny"
            centered
            wrapped
            verticalAlign="bottom"
          />
        }
        content={
          <>
            <Divider />
            <Tags game={game} />
          </>
        }
      ></Popup>
    </Card>
  );
};

export default GameCard;
