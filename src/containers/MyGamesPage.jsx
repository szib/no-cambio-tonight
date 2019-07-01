import React from 'react';

import { Header, Container, Segment } from 'semantic-ui-react';

import useMyGames from '../hooks/useMyGames';

import MyGameList from '../components/MyGameList';
import Loader from '../components/LoaderWithDimmer';

export default function MyGamesPage() {
  const [myGames] = useMyGames(localStorage.getItem('token'));
  const { gamePieces } = myGames;

  return (
    <Container>
      {myGames.loading ? (
        <Loader content="Loading games..." />
      ) : (
        <MyGameList gamePieces={gamePieces}></MyGameList>
      )}
    </Container>
  );
}
