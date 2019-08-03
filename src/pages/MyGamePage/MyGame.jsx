import React from 'react';

import { Link } from 'react-router-dom';

import { Segment, Label, Icon } from 'semantic-ui-react';
import GameDetails from '../../components/GameDetails';
import LabelBack from '../../components/LabelBack';

const MyGame = props => {
  const { gamePiece } = props;
  const { game } = gamePiece;

  const removeGame = e => {
    e.preventDefault();
    // dispatch(asyncRemoveGameFromMyGameLibray(gamePiece.id)).then(() => {
    //   props.history.push('/mygames');
    // });
  };

  return (
    <Segment raised>
      <LabelBack />
      <Label corner="right" color="red" as={Link} to="/" onClick={removeGame}>
        <Icon name="trash alternate outline" />
      </Label>
      <GameDetails game={game} />
    </Segment>
  );
};

export default MyGame;
