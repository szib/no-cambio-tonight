import React from 'react';

import { Label } from 'semantic-ui-react';

const GameList = props => {
  console.log('props', props);
  return (
    <div>
      {props.gamelist &&
        props.gamelist.map(game => <Label key={game.id} content={game.name} />)}
    </div>
  );
};

export default GameList;
