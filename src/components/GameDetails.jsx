import React from 'react';

import { Item, Rating } from 'semantic-ui-react';

import PlayersLabel from '../components/PlayersLabel';
import PlaytimeLabel from '../components/PlaytimeLabel';
import CategoryTag from './CategoryTag';
import MechanicTag from './MechanicTag';

const GameDetails = ({ game, withoutDescription }) => {
  const { categories, mechanics } = game;

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
            <PlayersLabel game={game} />
            <PlaytimeLabel game={game} />
            {categories &&
              categories.map(category => <CategoryTag name={category.name} />)}
            {mechanics &&
              mechanics.map(mechanic => <MechanicTag name={mechanic.name} />)}
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
