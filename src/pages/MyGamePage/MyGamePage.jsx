import React from 'react';
import useAuthentication from '../../hooks/useAuthentication';

import { Container } from 'semantic-ui-react';

import useMyGame from '../../hooks/useMyGame';

import MyGame from './MyGame';
import Loader from '../../components/LoaderWithDimmer';

export default function MyGamesPage(props) {
  const authenticated = useAuthentication();
  const gamePieceId = props.match.params.id;
  const myGameAPI = useMyGame(gamePieceId);

  if (myGameAPI.hasError) props.history.push('/mygames');
  if (myGameAPI.isLoading) return <Loader content="Loading games..." />;

  return (
    <Container>
      <MyGame gamePiece={myGameAPI.data} {...props} />
    </Container>
  );
}
