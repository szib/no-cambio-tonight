import React from 'react';

import useAPI from '../hooks/useAPI';
import useComments from '../hooks/useComments';

import { Segment, Container } from 'semantic-ui-react';
import GameDetails from '../components/GameDetails';
import LabelBack from '../components/LabelBack';
import LoaderWithDimmer from '../components/LoaderWithDimmer';
import Comments from '../components/Comments/Comments';

const GameItemPage = props => {
  console.log('props', props);
  const gameitemId = props.match.params.id;
  const gameItemAPI = useAPI(
    `http://localhost:3030/api/v1/gameitems/${gameitemId}`,
    { gameitem: { game: {} } }
  );

  const commentsFromAPI = useComments({
    path: '/gameitems',
    id: props.match.params.id
  });

  if (gameItemAPI.isLoading) {
    return <LoaderWithDimmer />;
  }

  const { gameitem } = gameItemAPI.data;
  console.log('gameitem', gameitem);
  const { game } = gameitem;

  return (
    <Container>
      <Segment raised>
        <LabelBack />
        <GameDetails game={game} />
        <Comments API={commentsFromAPI} />
      </Segment>
    </Container>
  );
};

export default GameItemPage;
