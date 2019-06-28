import React, { useState } from 'react';

import Menu from '../components/Menu';
import Game from '../components/Game';

import { Header, Container, Input, Form, List } from 'semantic-ui-react';

import { searchGamesByName } from '../api/games';

const GamesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
      <Menu></Menu>
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
      <List divided relaxed selection>
        {games.map(game => (
          <Game key={game.bgaId} game={game} />
        ))}
      </List>
    </Container>
  );
};

export default GamesPage;
