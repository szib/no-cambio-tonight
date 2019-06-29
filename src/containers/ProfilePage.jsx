import React from 'react';

import { Header, Container, Segment } from 'semantic-ui-react';

import MyGameList from '../components/MyGameList';

import useProfile from '../hooks/useProfile';
import useMyGames from '../hooks/useMyGames';

const ProfilePage = props => {
  const [profile] = useProfile(localStorage.getItem('token'));
  const [myGames] = useMyGames(localStorage.getItem('token'));

  const { user } = profile;
  const { firstName, lastName, username, memberSince, email } = user;
  const { gamePieces } = myGames;

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
        <MyGameList gamePieces={gamePieces}></MyGameList>
      )}
    </Container>
  );
};

export default ProfilePage;
