import React from 'react';

import { Header, Container, Segment } from 'semantic-ui-react';

import useMyGames from '../hooks/useMyGames';

import MyGameList from '../components/MyGameList';

export default function MyGamesPage() {
  const [myGames] = useMyGames(localStorage.getItem('token'));
  const { gamePieces } = myGames;

  return (
    <Container>
      {myGames.loading ? (
        <Header as="h1">Loading...</Header>
      ) : (
        <MyGameList gamePieces={gamePieces}></MyGameList>
      )}
    </Container>
  );
}
