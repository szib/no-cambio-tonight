import React from 'react';

import { Card, Image, Popup, Divider } from 'semantic-ui-react';

import PlayersLabel from '../../components/PlayersLabel';
import PlaytimeLabel from '../../components/PlaytimeLabel';

const GameCard = props => {
  const { gamePiece, onClickHandler } = props;
  const { game } = gamePiece;

  return (
    <Popup
      header={game.name}
      content={
        <>
          <Divider />
          <PlayersLabel game={game} />
          <PlaytimeLabel game={game} />
        </>
      }
      trigger={
        <Card
          as="div"
          key={gamePiece.id}
          color={gamePiece.color}
          onClick={() => onClickHandler(gamePiece.id)}
          content={
            <Image
              src={game.imageSmall}
              size="tiny"
              centered
              verticalAlign="bottom"
            />
          }
        ></Card>
      }
    />
  );
};

export default GameCard;
