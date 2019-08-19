import React from 'react';
import useAPI from '../hooks/useAPI';

import { withRouter } from 'react-router-dom';

import { Segment, Grid, Image, Card, Placeholder } from 'semantic-ui-react';

const GameLibrary = props => {
  const { user } = props;
  const { id: userId } = user;

  const apiConfig = {
    url: `${process.env.REACT_APP_BACKEND_URL}/users/${userId}/gameitems`,
    initialData: {
      gameitems: []
    }
  };

  const { data, isLoading } = useAPI(apiConfig);

  if (isLoading) {
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

  const { gameitems } = data;

  return (
    <Card.Group itemsPerRow={8} stackable>
      {gameitems &&
        gameitems.map(gameitem => {
          const { game } = gameitem;
          return (
            <Card
              key={gameitem.id}
              onClick={() => props.history.push(`/gameitems/${gameitem.id}`)}
            >
              <Image src={game.imageMedium} wrapped ui={false} size="small" />
            </Card>
          );
        })}
    </Card.Group>
  );
};

export default withRouter(GameLibrary);
