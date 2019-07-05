import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import {
  asyncAddGameToMyGameLibray,
  asyncRemoveGameFromMyGameLibray
} from '../../redux/thunk/myGames';

import { Button, Icon } from 'semantic-ui-react';

const AddRemoveButton = ({ game, gamePieceId }) => {
  const dispatch = useDispatch();
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const addGame = () => {
    setIsButtonLoading(true);
    dispatch(asyncAddGameToMyGameLibray(game.bgaId)).then(gamePiece => {
      setIsButtonLoading(false);
    });
  };

  const removeGame = () => {
    setIsButtonLoading(true);
    dispatch(asyncRemoveGameFromMyGameLibray(gamePieceId)).then(() => {
      setIsButtonLoading(false);
    });
  };

  if (gamePieceId) {
    return (
      <Button
        loading={isButtonLoading}
        color="red"
        inverted
        fluid
        onClick={removeGame}
      >
        <Icon name="trash" alt="Remove from my game library" />
        Remove
      </Button>
    );
  } else {
    return (
      <Button
        loading={isButtonLoading}
        color="green"
        inverted
        fluid
        onClick={addGame}
      >
        <Icon name="add" alt="Add to my game library" />
        Add
      </Button>
    );
  }
};

export default AddRemoveButton;
