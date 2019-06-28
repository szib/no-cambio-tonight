import React, { useState } from 'react';

import GameList from '../components/GameList';

import { Header, Container, Input, Form, Segment } from 'semantic-ui-react';

import { searchGamesByName } from '../api/games';
import useMyGames from '../hooks/useMyGames';

const GamesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [myGames] = useMyGames(localStorage.getItem('token'));

  const onSubmitHandler = event => {
    if (searchTerm) {
      setIsLoading(true);

      searchGamesByName(searchTerm)
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
      {games.length !== 0 && <GameList data={games}></GameList>}
    </Container>
  );
};

export default GamesPage;
