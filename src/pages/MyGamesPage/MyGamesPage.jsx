import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { Container, Header, Segment } from 'semantic-ui-react';
import { MyGamesContext } from '../../lib/context';

import MyGamesItems from './MyGamesItems';
import Loader from '../../components/LoaderWithDimmer';
import SearchBar from '../../components/SearchBar';

export default function MyGamesPage(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const myGames = useContext(MyGamesContext);
  const { gamePieces } = myGames;
  let filterdGamePieces = gamePieces;

  if (myGames.isLoading) return <Loader content="Loading games..." />;

  if (!myGames.isLoading) {
    filterdGamePieces = gamePieces.filter(gp =>
      gp.game.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <Container>
      <Segment>
        <Header as="h1">My game library</Header>
        <SearchBar searchTerm={searchTerm} onChangeHandler={setSearchTerm} />
        {gamePieces.length === 0 && (
          <Header>
            You have no games yet. Try to <Link to="/findgame">add</Link> a few
            to your game library.
          </Header>
        )}
        {gamePieces.length !== 0 && (
          <MyGamesItems gamePieces={filterdGamePieces} />
        )}
      </Segment>
    </Container>
  );
}
