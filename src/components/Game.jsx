import React, { useState } from 'react';

import { addGameToMyGameLibray } from '../api/games';

import { List, Rating, Image, Grid, Button } from 'semantic-ui-react';

const Game = props => {
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const addGame = bgaId => {
    setIsButtonLoading(true);
    console.log('bgaId', bgaId);
    addGameToMyGameLibray(bgaId).then(data => {
      setIsButtonLoading(false);
    });
  };

  const { game } = props;
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

          <List.Description>
            <Button
              loading={isButtonLoading}
              onClick={() => addGame(game.bgaId)}
            >
              Add to my game library
            </Button>
          </List.Description>
        </Grid.Column>
      </Grid>
    </List.Item>
  );
};

export default Game;
