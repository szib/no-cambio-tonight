import React from 'react';

import { Header, List, Grid, Image } from 'semantic-ui-react';

const UserInfo = ({ user }) => {
  const {
    fullName,
    memberSince,
    email,
    picture,
    numberOfOrganisedEvents,
    numberOfAttendedEvents,
    numberOfComments
  } = user;

  return (
    <Grid>
      <Grid.Column width={2}>
        <Image src={picture.large} bordered circular size="big" />
      </Grid.Column>

      <Grid.Column width={14}>
        <Header as="h1">{fullName}</Header>
        <List>
          {email && (
            <List.Item>
              <List.Icon name="mail" />
              <List.Content>{email}</List.Content>
            </List.Item>
          )}
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
          <List.Item>
            <List.Icon name="comments" />
            <List.Content>Comments: {numberOfComments}</List.Content>
          </List.Item>
        </List>
      </Grid.Column>
    </Grid>
  );
};

export default UserInfo;
