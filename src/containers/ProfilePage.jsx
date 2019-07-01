import React from 'react';

import { Header, Container, Segment } from 'semantic-ui-react';

import useProfile from '../hooks/useProfile';

import Loader from '../components/LoaderWithDimmer';

const ProfilePage = props => {
  const [profile] = useProfile(localStorage.getItem('token'));

  const { user } = profile;
  const { firstName, lastName, username, memberSince, email } = user;

  return (
    <Container>
      <Segment>
        {profile.loading ? (
          <Loader content="Loading profile..." />
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
    </Container>
  );
};

export default ProfilePage;
