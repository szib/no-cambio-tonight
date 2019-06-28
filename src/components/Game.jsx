import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  addGameToMyGameLibray,
  removeGameFromMyGameLibray
} from '../redux/thunk/myGames';

import { List, Rating, Image, Grid, Button } from 'semantic-ui-react';

const Game = props => {
  const dispatch = useDispatch();
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const addGame = game => {
    console.log('game', game);
    setIsButtonLoading(true);
    dispatch(addGameToMyGameLibray(game.bgaId)).then(() => {
      setIsButtonLoading(false);
    });
  };

  const removeGame = gamePieceId => {
    console.log('gamePieceId', gamePieceId);
    setIsButtonLoading(true);
    dispatch(removeGameFromMyGameLibray(gamePieceId)).then(() => {
      setIsButtonLoading(false);
    });
  };

  const { game, gamePieceId } = props;

  console.log('props', props);
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

          {props.gamePieceId ? (
            <List.Description>
              <Button
                primary
                loading={isButtonLoading}
                onClick={() => removeGame(gamePieceId)}
              >
                Remove from my library
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
