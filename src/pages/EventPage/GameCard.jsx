import React from 'react';

import styled from 'styled-components';

import { Card, Popup, Divider } from 'semantic-ui-react';

import Tags from '../../components/Tags/Tags';

const Img = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-image: url(${props => props.bgImage});
  min-height: 60px;
  margin: 2px;
`;

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
        trigger={<Img bgImage={game.imageSmall} />}
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
