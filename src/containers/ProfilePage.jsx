import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Header, Container, Segment } from 'semantic-ui-react';

import GameList from '../components/GameList';

import { fetchProfile } from '../api/profile';
import { fetchMyGames } from '../api/myGames';

const ProfilePage = props => {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile);
  const myGames = useSelector(state => state.myGames);

  const { firstName, lastName, username, memberSince, email } = profile.data;

  useEffect(() => {
    dispatch(fetchProfile());
    dispatch(fetchMyGames());
  }, [dispatch]);

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
        <GameList games={myGames.data}></GameList>
      )}
    </Container>
  );
};

export default ProfilePage;
