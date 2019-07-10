import React from 'react';
import useAPI from '../hooks/useAPI';

import { withRouter } from 'react-router-dom';

import { Segment, Grid, Image, Card, Placeholder } from 'semantic-ui-react';

const GameLibrary = props => {
  const { user } = props;
  const { id: userId } = user;

  const gameItemsAPI = useAPI(
    `http://localhost:3030/api/v1/users/${userId}/gameitems`,
    { gameitems: [] }
  );

  if (gameItemsAPI.isLoading) {
    return (
      <Grid columns={3} stackable>
        <Grid.Column>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length="medium" />
                <Placeholder.Line length="short" />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length="medium" />
                <Placeholder.Line length="short" />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>

        <Grid.Column>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length="medium" />
                <Placeholder.Line length="short" />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }

  const { gameitems } = gameItemsAPI.data;

  return (
    <Card.Group itemsPerRow={10} stackable>
      {gameitems &&
        gameitems.map(gameitem => {
          const { game } = gameitem;
          return (
            <Card
              key={gameitem.id}
              onClick={() => props.history.push(`/gameitems/${gameitem.id}`)}
            >
              <Image src={game.imageSmall} wrapped ui={false} size="small" />
              <Card.Content>
                <Card.Meta>{game.name}</Card.Meta>
              </Card.Content>
            </Card>
          );
        })}
    </Card.Group>
  );
};

export default withRouter(GameLibrary);
