import React from 'react';
import useAuthentication from '../hooks/useAuthentication';

import {
  Header,
  Container,
  Segment,
  List,
  Grid,
  Image
} from 'semantic-ui-react';

import useProfile from '../hooks/useProfile';

import Loader from '../components/LoaderWithDimmer';

const ProfilePage = props => {
  const authenticated = useAuthentication();
  const [profile] = useProfile(localStorage.getItem('token'));

  const { user } = profile;
  const {
    fullName,
    username,
    memberSince,
    email,
    picture,
    numberOfOrganisedEvents,
    numberOfAttendedEvents
  } = user;
  const { medium, large } = picture;

  return (
    <Container>
      <Segment>
        {profile.loading ? (
          <Loader content="Loading profile..." />
        ) : (
          <Grid>
            <Grid.Column width={2}>
              <Image src={large} bordered circular size="big" />
            </Grid.Column>

            <Grid.Column width={14}>
              <Header as="h1">{fullName}</Header>
              <List>
                <List.Item>
                  <List.Icon name="mail" />
                  <List.Content>{email}</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="clock outline" />
                  <List.Content>Joined: {memberSince}</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="calendar check outline" />
                  <List.Content>
                    Organised events: {numberOfOrganisedEvents}
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="calendar check outline" />
                  <List.Content>
                    Attended events: {numberOfAttendedEvents}
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid>
        )}
      </Segment>
    </Container>
  );
};

export default ProfilePage;
