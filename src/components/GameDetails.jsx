import React from 'react';

import { Item, Rating, Label, Icon } from 'semantic-ui-react';

const GameDetails = ({ game, withoutDescription }) => {
  const getPlayers = game => {
    if (game.minPlayers === game.maxPlayers) {
      return `${game.minPlayers} players`;
    } else {
      return `${game.minPlayers} - ${game.maxPlayers} players`;
    }
  };

  return (
    <Item.Group>
      <Item>
        {withoutDescription ? (
          <Item.Image src={game.imageSmall} size="tiny" />
        ) : (
          <Item.Image src={game.imageMedium} size="small" />
        )}
        <Item.Content>
          <Item.Header>{game.name}</Item.Header>
          <Item.Meta>
            {game.averageUserRating && (
              <Rating
                icon="star"
                defaultRating={Math.round(game.averageUserRating)}
                maxRating={5}
                disabled
              />
            )}
            <div>{game.publisher}</div>
          </Item.Meta>
          <Item.Extra>
            {game.minPlayers && game.maxPlayers && (
              <Label>
                <Icon name="user" />
                {getPlayers(game)}
              </Label>
            )}
            {game.minPlaytime && game.maxPlaytime && (
              <Label>
                <Icon name="clock outline" />
                {game.minPlaytime} - {game.maxPlaytime} minutes
              </Label>
            )}
          </Item.Extra>
          {!withoutDescription && (
            <Item.Description
              dangerouslySetInnerHTML={{ __html: game.description }}
            />
          )}
        </Item.Content>
      </Item>
    </Item.Group>
  );
};

export default GameDetails;
