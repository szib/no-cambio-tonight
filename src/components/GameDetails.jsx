import React from 'react';

import { Item, Rating } from 'semantic-ui-react';

import Tags from './Tags/Tags';

const GameDetails = ({ game, withoutDescription }) => {
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
            <Tags game={game} />
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
