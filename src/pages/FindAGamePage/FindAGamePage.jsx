import React, { useState } from 'react';

import useAuthentication from '../../hooks/useAuthentication';
import useMyGames from '../../hooks/useMyGames';

import Games from './Games';

import { Header, Container, Segment } from 'semantic-ui-react';

import { searchGamesByName } from '../../api/games';

import Loader from '../../components/LoaderWithDimmer';
import SearchBar from '../../components/SearchBar';

const GamesPage = () => {
  useAuthentication();
  const [searchTerm, setSearchTerm] = useState('');
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [, findGamePieceIdByBgaId] = useMyGames();

  const removeAddedGame = bgaId => {
    const newGames = games.filter(game => game.game.bgaId !== bgaId);
    setGames([...newGames]);
  };

  const onSubmitHandler = event => {
    if (searchTerm) {
      setIsLoading(true);

      searchGamesByName(searchTerm)
        .then(json => json.games)
        .then(setGames)
        .then(() => setIsLoading(false))
        .catch(err => {
          setIsLoading(false);
          console.error(err);
        });
    }
  };

  return (
    <Container>
      <Segment>
        <Header as="h1">Find a game</Header>
        <SearchBar
          onSubmitHandler={onSubmitHandler}
          searchTerm={searchTerm}
          onChangeHandler={setSearchTerm}
          isLoading={isLoading}
        />
        {isLoading && <Loader />}
        {games.length !== 0 && (
          <Games
            games={games}
            findGamePieceIdByBgaId={findGamePieceIdByBgaId}
            removeHandler={removeAddedGame}
          ></Games>
        )}
      </Segment>
    </Container>
  );
};

export default GamesPage;
