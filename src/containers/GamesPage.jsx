import React, { useState } from 'react';

import GameList from '../components/GameList';

import { Header, Container, Input, Form, Segment } from 'semantic-ui-react';

import { searchGamesByName } from '../api/games';
import useMyGames from '../hooks/useMyGames';

const GamesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [myGames] = useMyGames(localStorage.getItem('token'));

  const filterOutGamesInLibrary = data => {
    const bgaIds = myGames.data.map(game => game.game.bgaId);
    return data.filter(d => !bgaIds.includes(d.game.bgaId));
  };

  const removeAddedGame = bgaId => {
    const newGames = games.filter(game => game.game.bgaId !== bgaId);
    setGames([...newGames]);
  };

  const onSubmitHandler = event => {
    if (searchTerm) {
      setIsLoading(true);

      searchGamesByName(searchTerm)
        .then(filterOutGamesInLibrary)
        .then(setGames)
        .then(() => setIsLoading(false));
    }
  };

  return (
    <Container>
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
        <GameList data={games} removeHandler={removeAddedGame}></GameList>
      )}
    </Container>
  );
};

export default GamesPage;
