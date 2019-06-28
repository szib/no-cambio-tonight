import React from 'react';
import { useSelector } from 'react-redux';

import { Segment, List } from 'semantic-ui-react';
import Game from '../components/Game';

const GameList = props => {
  const myGamesBgaIds = useSelector(state =>
    state.myGames.data.map(game => game.bgaId)
  );
  const { games } = props;

  return (
    <Segment>
      <List divided relaxed selection>
        {games.map(game => {
          return (
            <Game
              key={game.bgaId}
              isInMyLibrary={myGamesBgaIds.includes(game.bgaId)}
              game={game}
            />
          );
        })}
      </List>
    </Segment>
  );
};

export default GameList;
