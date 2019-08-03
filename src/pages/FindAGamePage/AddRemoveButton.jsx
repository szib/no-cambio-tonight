import React, { useState, useContext } from 'react';

import { MyGamesContext } from '../../lib/context';

import { Button, Icon, Popup } from 'semantic-ui-react';

const AddRemoveButton = ({ game, gamePieceId }) => {
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [, , addGame, removeGame] = useContext(MyGamesContext);

  const addGameHandler = () => {
    setIsButtonLoading(true);
    addGame(game.bgaId).then(gamePiece => {
      setIsButtonLoading(false);
    });
  };

  const removeGameHandler = () => {
    setIsButtonLoading(true);
    removeGame(gamePieceId).then(() => {
      setIsButtonLoading(false);
    });
  };

  if (gamePieceId) {
    return (
      <Popup
        on="click"
        trigger={
          <Button color="red">
            <Icon name="trash" alt="Remove from my game library" /> Remove
          </Button>
        }
        content={
          <Button
            color="red"
            content="Confirm removing game"
            onClick={removeGameHandler}
          />
        }
      />
    );
  } else {
    return (
      <Button
        loading={isButtonLoading}
        color="green"
        inverted
        fluid
        onClick={addGameHandler}
      >
        <Icon name="add" alt="Add to my game library" />
        Add
      </Button>
    );
  }
};

export default AddRemoveButton;
