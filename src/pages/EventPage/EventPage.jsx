import React from 'react';

import { Link } from 'react-router-dom';

import useEvent from '../../hooks/useEvent';
import useAuthentication from '../../hooks/useAuthentication';

import {
  Button,
  Header,
  Icon,
  Segment,
  Label,
  Container,
  Grid,
  Divider,
  Popup
} from 'semantic-ui-react';

import Loader from '../../components/LoaderWithDimmer';
import EventLabels from '../../components/EventLabels';
import Attendees from './Attendees';
import GameCards from './GameCards';
import EventDateTime from '../../components/EventDateTime';

import Comments from '../../components/Comments/Comments';

const EventDetails = ({ match, history }) => {
  useAuthentication();

  const eventFromAPI = useEvent(match.params.id);
  const { data, eventGamePieces, userGamePieces, handlers } = eventFromAPI;
  const { event } = data;
  const eventIsFullAndUserIsNotAttending =
    event.capacity <= event.numberOfAttendees && !event.isCurrentUserAttending;

  const backHandler = e => {
    history.goBack();
  };

  return (
    <Container>
      {eventFromAPI.isLoading && <Loader />}
      <Segment raised>
        <Label corner="left" color="blue" as={Link} to="" onClick={backHandler}>
          <Icon name="arrow left" />
        </Label>

        <Segment>
          <Grid columns="two">
            <Grid.Row>
              <Grid.Column>
                <Header icon="browser" content={event.title}></Header>
                <EventLabels event={event} />
              </Grid.Column>
              <Grid.Column>
                <EventDateTime event={event} />
                <Header icon="map marker alternate" content={event.location} />
              </Grid.Column>
            </Grid.Row>
            <Divider />
            <Grid.Row>
              <Grid.Column>
                <Header content="Attendees" />
                <Attendees attendees={event.attendees} />
              </Grid.Column>
              <Grid.Column>
                <Header content="Games" />
                <GameCards
                  eventCancelled={event.isCancelled}
                  gamePieces={eventGamePieces}
                  onClickHandler={handlers.removeGameHandler}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        {event.isCurrentUserAttending && (
          <Segment>
            <Header content="My Games" />
            <GameCards
              eventCancelled={event.isCancelled}
              gamePieces={userGamePieces}
              onClickHandler={handlers.addGameHandler}
              itemsPerRow={10}
            />
          </Segment>
        )}
        <Container textAlign="right">
          {!(event.isCancelled || !event.isCurrentUserOrganising) && (
            <Popup
              on="click"
              trigger={
                <Button
                  color="red"
                  disabled={event.isCancelled || !event.isCurrentUserOrganising}
                >
                  <Icon name="delete calendar" /> Cancel event
                </Button>
              }
              content={
                <Button
                  color="green"
                  content="Confirm cancellation"
                  onClick={handlers.cancelHandler}
                />
              }
            />
          )}

          <Button
            color={event.isCurrentUserAttending ? 'red' : 'green'}
            onClick={handlers.rsvpHandler}
            disabled={event.isCancelled || eventIsFullAndUserIsNotAttending}
          >
            <Icon name="checkmark" />
            {!event.isCurrentUserAttending && 'RSVP'}
            {event.isCurrentUserAttending && 'Cancel RSVP'}
          </Button>
        </Container>
      </Segment>

      <Comments comments={event.comments} />
    </Container>
  );
};

export default EventDetails;
