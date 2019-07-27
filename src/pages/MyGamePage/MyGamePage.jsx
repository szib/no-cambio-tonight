import React from 'react';
import useAuthentication from '../../hooks/useAuthentication';

import { Container } from 'semantic-ui-react';

import useAPI from '../../hooks/useAPI';

import MyGame from './MyGame';
import Loader from '../../components/LoaderWithDimmer';

const initialData = {
  id: null,
  owner_id: null,
  game_id: null,
  game: {},
  categories: [],
  mechanics: []
};

const MyGamesPage = props => {
  useAuthentication();
  const gamePieceId = props.match.params.id;
  const apiConfig = {
    url: `http://localhost:3030/api/v1/mygames/${gamePieceId}`,
    initialData
  };

  const { data, error, isLoading } = useAPI(apiConfig);

  if (error) props.history.push('/mygames');
  if (isLoading) return <Loader content="Loading games..." />;

  return (
    <Container>
      <MyGame gamePiece={data} {...props} />
    </Container>
  );
};

export default MyGamesPage;
