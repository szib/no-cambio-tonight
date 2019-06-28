import React from 'react';
import { useSelector } from 'react-redux';

import { Segment, List } from 'semantic-ui-react';
import Game from '../components/Game';

const GameList = props => {
  const { data } = props;

  return (
    <Segment>
      <List divided relaxed selection>
        {data.map(gameObj => {
          const { game } = gameObj;
          return <Game key={game.bgaId} game={game} gamePieceId={gameObj.id} />;
        })}
      </List>
    </Segment>
  );
};

export default GameList;
