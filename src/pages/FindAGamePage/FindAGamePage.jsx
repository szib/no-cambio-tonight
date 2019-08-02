import React, { useState } from 'react';

import { withRouter } from 'react-router-dom';

import Games from './Games';

import { Header, Container, Segment } from 'semantic-ui-react';

import { searchGamesByName } from '../../api/games';

import Loader from '../../components/LoaderWithDimmer';
import SearchBar from '../../components/SearchBar';
import LabelBack from '../../components/LabelBack';

const GamesPage = props => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const removeAddedGame = bgaId => {
    const newGames = searchResults.filter(game => game.game.bgaId !== bgaId);
    setSearchResults([...newGames]);
  };

  const onSubmitHandler = event => {
    if (searchTerm) {
      setIsLoading(true);

      searchGamesByName(searchTerm)
        .then(json => json.games)
        .then(setSearchResults)
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
        <LabelBack />
        <Header as="h1">Find a game</Header>
        <SearchBar
          onSubmitHandler={onSubmitHandler}
          searchTerm={searchTerm}
          onChangeHandler={setSearchTerm}
          isLoading={isLoading}
        />
        {isLoading && <Loader />}
        {searchResults.length !== 0 && (
          <Games games={searchResults} removeHandler={removeAddedGame}></Games>
        )}
      </Segment>
    </Container>
  );
};

export default withRouter(GamesPage);
