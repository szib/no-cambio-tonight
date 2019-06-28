import React from 'react';

import { Segment, List } from 'semantic-ui-react';
import Game from '../components/Game';

const GameList = props => {
  const { data, removeHandler } = props;

  return (
    <Segment>
      <List divided relaxed>
        {data.map(gameObj => {
          const { game } = gameObj;
          return (
            <Game
              key={game.bgaId}
              game={game}
              gamePieceId={gameObj.id}
              removeHandler={removeHandler}
            />
          );
        })}
      </List>
    </Segment>
  );
};

export default GameList;
