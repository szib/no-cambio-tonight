import React from 'react';

import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { asyncRemoveGameFromMyGameLibray } from '../../redux/thunk/myGames';

import { Segment, Label, Icon } from 'semantic-ui-react';
import GameDetails from '../../components/GameDetails';

const MyGame = props => {
  const { gamePiece } = props;
  const { game } = gamePiece;

  const dispatch = useDispatch();

  const removeGame = () => {
    dispatch(asyncRemoveGameFromMyGameLibray(gamePiece.id)).then(() => {
      props.history.push('/mygames');
    });
  };

  return (
    <Segment raised>
      <Label corner="left" color="blue" as={Link} to="/mygames">
        <Icon name="arrow left" />
      </Label>
      <Label corner="right" color="red" onClick={removeGame}>
        <Icon name="trash alternate outline" />
      </Label>
      <GameDetails game={game} />
    </Segment>
  );
};

export default MyGame;
