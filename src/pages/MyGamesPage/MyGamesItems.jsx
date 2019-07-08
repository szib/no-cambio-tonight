import React from 'react';
import { Link } from 'react-router-dom';

import { Item, Rating } from 'semantic-ui-react';

import Tags from '../../components/Tags/Tags';

const MyGameItems = ({ gamePieces }) => {
  return (
    <Item.Group divided>
      {gamePieces.map(gp => {
        const { game } = gp;
        return (
          <Item>
            <Item.Image
              size="tiny"
              src={game.imageSmall}
              as={Link}
              to={`/mygames/${gp.id}`}
            />

            <Item.Content>
              <Item.Header as={Link} to={`/mygames/${gp.id}`}>
                {game.name}
              </Item.Header>
              <Item.Meta>
                <div>{game.publisher}</div>
                <Rating
                  icon="star"
                  defaultRating={Math.round(game.averageUserRating)}
                  maxRating={5}
                  disabled
                />
              </Item.Meta>
              <Item.Description>
                <Tags game={game} />
              </Item.Description>
            </Item.Content>
          </Item>
        );
      })}
    </Item.Group>
  );
};

export default MyGameItems;
