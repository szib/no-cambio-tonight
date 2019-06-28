import React from 'react';

import { Header, Container, Segment } from 'semantic-ui-react';

import GameList from '../components/GameList';

import useProfile from '../hooks/useProfile';
import useMyGames from '../hooks/useMyGames';

const ProfilePage = props => {
  const [profile] = useProfile(localStorage.getItem('token'));
  const [myGames] = useMyGames(localStorage.getItem('token'));

  const { firstName, lastName, username, memberSince, email } = profile.data;

  return (
    <Container>
      <Segment>
        {profile.loading ? (
          <Header as="h1">Loading...</Header>
        ) : (
          <>
            <Header as="h1">
              {firstName} {lastName}
            </Header>
            <ul>
              <li>{email}</li>
              <li>{memberSince}</li>
              <li>{username}</li>
            </ul>
          </>
        )}
      </Segment>
      {myGames.loading ? (
        <Header as="h1">Loading...</Header>
      ) : (
        <GameList data={myGames.data}></GameList>
      )}
    </Container>
  );
};

export default ProfilePage;
