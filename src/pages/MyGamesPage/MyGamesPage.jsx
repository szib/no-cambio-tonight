import React, { useState } from 'react';
import useAuthentication from '../../hooks/useAuthentication';
import useMyGames from '../../hooks/useMyGames';

import { Container, Header } from 'semantic-ui-react';

import MyGamesItems from './MyGamesItems';
import Loader from '../../components/LoaderWithDimmer';
import SearchBar from '../../components/SearchBar';

export default function MyGamesPage(props) {
  useAuthentication();
  const [searchTerm, setSearchTerm] = useState('');

  const [myGames] = useMyGames();
  const { gamePieces } = myGames;
  let filterdGamePieces = gamePieces;

  if (!myGames.isLoading) {
    filterdGamePieces = gamePieces.filter(gp =>
      gp.game.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <Container>
      <Header as="h1">Games</Header>
      <SearchBar searchTerm={searchTerm} onChangeHandler={setSearchTerm} />
      {myGames.loading ? (
        <Loader content="Loading games..." />
      ) : (
        <MyGamesItems gamePieces={filterdGamePieces} />
      )}
    </Container>
  );
}
