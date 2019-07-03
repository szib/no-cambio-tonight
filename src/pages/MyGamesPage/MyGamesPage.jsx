import React from 'react';

import { Container } from 'semantic-ui-react';

import useMyGames from '../../hooks/useMyGames';

import MyGames from './MyGames';
import Loader from '../../components/LoaderWithDimmer';

export default function MyGamesPage(props) {
  const [myGames] = useMyGames(localStorage.getItem('token'));
  const { gamePieces } = myGames;

  return (
    <Container>
      {myGames.loading ? (
        <Loader content="Loading games..." />
      ) : (
        <MyGames gamePieces={gamePieces} {...props} />
      )}
    </Container>
  );
}
