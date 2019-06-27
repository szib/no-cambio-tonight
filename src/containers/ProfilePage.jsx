import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Menu from '../components/Menu';

import { Header, Container } from 'semantic-ui-react';

import { fetchProfile } from '../api/profile';

const ProfilePage = props => {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile);

  const { error, loading, data } = profile;
  const { firstName, lastName, username, memberSince, email } = data;

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  return (
    <Container>
      <Menu></Menu>
      {loading ? (
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
    </Container>
  );
};

export default ProfilePage;
