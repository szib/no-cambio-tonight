import React from 'react';

import { Card, Image, Popup, Divider } from 'semantic-ui-react';

import PlayersLabel from '../../components/PlayersLabel';
import PlaytimeLabel from '../../components/PlaytimeLabel';

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
            verticalAlign="bottom"
          />
        }
        content={
          <>
            <Divider />
            <PlayersLabel game={game} />
            <PlaytimeLabel game={game} />
          </>
        }
      ></Popup>
    </Card>
  );
};

export default GameCard;
