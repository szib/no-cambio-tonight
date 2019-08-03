import React from 'react';
import useAPI from '../hooks/useAPI';

import { Container, Segment } from 'semantic-ui-react';

import Loader from '../components/LoaderWithDimmer';
import UserInfo from '../components/UserInfo';
import GameLibrary from '../components/GameLibrary';

const ProfilePage = ({ match, history }) => {
  const id = match.params.id;

  const apiConfig = {
    url: `http://localhost:3030/api/v1/users/${id}`,
    initialData: {
      user: {
        attendedEvents: [],
        organisedEvents: []
      }
    }
  };

  const { data, error, isLoading } = useAPI(apiConfig);

  if (error) {
    history.push('/dashboard');
  }

  return (
    <Container>
      <Segment>
        {isLoading || !data.user ? (
          <Loader content="Loading profile..." />
        ) : (
          <>
            <UserInfo user={data.user} />
            <GameLibrary user={data.user} />
          </>
        )}
      </Segment>
    </Container>
  );
};

export default ProfilePage;
