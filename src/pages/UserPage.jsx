import React from 'react';
import useAuthentication from '../hooks/useAuthentication';
import useAPI from '../hooks/useAPI';

import { Container, Segment } from 'semantic-ui-react';

import Loader from '../components/LoaderWithDimmer';
import UserInfo from '../components/UserInfo';
import GameLibrary from '../components/GameLibrary';

const ProfilePage = ({ match, history }) => {
  useAuthentication();
  const id = match.params.id;
  const userAPI = useAPI(`http://localhost:3030/api/v1/users/${id}`, {});

  if (userAPI.hasError) {
    history.push('/');
  }

  return (
    <Container>
      <Segment>
        {userAPI.loading || !userAPI.data.user ? (
          <Loader content="Loading profile..." />
        ) : (
          <>
            <UserInfo user={userAPI.data.user} />
            <GameLibrary user={userAPI.data.user} />
          </>
        )}
      </Segment>
    </Container>
  );
};

export default ProfilePage;
