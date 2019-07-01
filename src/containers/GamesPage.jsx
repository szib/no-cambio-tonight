import React, { useState } from 'react';

import GameList from '../components/GameList';

import { Header, Container, Input, Form, Segment } from 'semantic-ui-react';

import { searchGamesByName } from '../api/games';
import useMyGames from '../hooks/useMyGames';

import Loader from '../components/LoaderWithDimmer';

const GamesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [, findGamePieceIdByBgaId] = useMyGames(localStorage.getItem('token'));

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
      {isLoading && <Loader />}
      <Segment>
        <Header as="h1">Games</Header>
        <Form onSubmit={onSubmitHandler}>
          <Input
            loading={isLoading}
            fluid
            placeholder="Search..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </Form>
      </Segment>
      {games.length !== 0 && (
        <GameList
          games={games}
          findGamePieceIdByBgaId={findGamePieceIdByBgaId}
          removeHandler={removeAddedGame}
        ></GameList>
      )}
    </Container>
  );
};

export default GamesPage;
