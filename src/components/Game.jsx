import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  asyncAddGameToMyGameLibray,
  asyncRemoveGameFromMyGameLibray
} from '../redux/thunk/myGames';

import { List, Rating, Image, Grid, Button } from 'semantic-ui-react';

const Game = props => {
  const { game, gamePieceId } = props;
  const dispatch = useDispatch();
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const addGame = game => {
    setIsButtonLoading(true);
    dispatch(asyncAddGameToMyGameLibray(game.bgaId)).then(gamePiece => {
      setIsButtonLoading(false);
    });
  };

  const removeGame = gamePieceId => {
    setIsButtonLoading(true);
    dispatch(asyncRemoveGameFromMyGameLibray(gamePieceId)).then(() => {
      setIsButtonLoading(false);
    });
  };

  return (
    <List.Item>
      <Grid>
        <Grid.Column width={2}>
          <Image src={game.imageSmall} size="tiny" />
        </Grid.Column>
        <Grid.Column width={10}>
          <List.Header>{game.name}</List.Header>
          <List.Description>
            {game.publisher}
            &nbsp;
            {game.yearPublished}
            <List.Description></List.Description>
            {game.averageUserRating && (
              <Rating
                icon="star"
                defaultRating={Math.round(game.averageUserRating)}
                maxRating={5}
                disabled
              />
            )}
          </List.Description>
          <List.Description>{game.description}</List.Description>
        </Grid.Column>

        <Grid.Column width={4}>
          {game.minPlayers && (
            <List.Description>
              Players: {game.minPlayers} - {game.maxPlayers}
            </List.Description>
          )}

          {game.minPlaytime && (
            <List.Description>
              Playtime: {game.minPlaytime} - {game.maxPlaytime}
            </List.Description>
          )}

          {gamePieceId ? (
            <List.Description>
              <Button
                primary
                loading={isButtonLoading}
                onClick={() => removeGame(gamePieceId)}
              >
                Remove
              </Button>
            </List.Description>
          ) : (
            <List.Description>
              <Button
                primary
                loading={isButtonLoading}
                onClick={() => addGame(game)}
              >
                Add to my game library
              </Button>
            </List.Description>
          )}
        </Grid.Column>
      </Grid>
    </List.Item>
  );
};

export default Game;
