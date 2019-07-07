import React from 'react';
import useAuthentication from '../hooks/useAuthentication';

import { Container, Segment } from 'semantic-ui-react';

import useProfile from '../hooks/useProfile';

import Loader from '../components/LoaderWithDimmer';
import UserInfo from '../components/UserInfo';

const ProfilePage = props => {
  useAuthentication();
  const [profile] = useProfile(localStorage.getItem('token'));

  const { user } = profile;

  return (
    <Container>
      <Segment>
        {profile.loading ? (
          <Loader content="Loading profile..." />
        ) : (
          <UserInfo user={user} />
        )}
      </Segment>
    </Container>
  );
};

export default ProfilePage;
