import React, { useState } from 'react';
import useAPI from '../hooks/useAPI';

import { Container, Segment, List } from 'semantic-ui-react';

import Loader from '../components/LoaderWithDimmer';
import UsersInfo from '../components/UsersInfo';
import SearchBar from '../components/SearchBar';

const apiConfig = {
  url: `${process.env.REACT_APP_BACKEND_URL}/users/`,
  initialData: {
    users: []
  }
};

const MembersPage = props => {
  const { history } = props;

  const [searchTerm, setSearchTerm] = useState('');

  const { data, error, isLoading } = useAPI(apiConfig);

  if (isLoading) return <Loader content="Loading members..." />;
  if (error) {
    history.push('/dashboard');
  }

  const getFilteredMembers = users =>
    users.filter(user =>
      user.fullName.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <Container>
      <Segment>
        <SearchBar searchTerm={searchTerm} onChangeHandler={setSearchTerm} />
        <List divided relaxed>
          {getFilteredMembers(data.users).map(user => (
            <List.Item
              style={{ cursor: 'pointer' }}
              key={user.id}
              onClick={() => history.push(`/users/${user.id}`)}
            >
              <UsersInfo user={user} />
            </List.Item>
          ))}
        </List>
      </Segment>
    </Container>
  );
};

export default MembersPage;
