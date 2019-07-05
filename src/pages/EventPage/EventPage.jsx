import React from 'react';

import { Link } from 'react-router-dom';

import useEvent from '../../hooks/useEvent';

import {
  Button,
  Header,
  Icon,
  Segment,
  Label,
  Container,
  Grid,
  Divider
} from 'semantic-ui-react';

import Loader from '../../components/LoaderWithDimmer';
import EventLabels from '../../components/EventLabels';
import Attendees from './Attendees';
import GameCards from './GameCards';

const EventDetails = props => {
  const { match } = props;

  const eventFromAPI = useEvent(match.params.id);
  const { data, eventGamePieces, userGamePieces, handlers } = eventFromAPI;
  const { event } = data;

  const start = new Date(event.startDateTime).toLocaleString();
  const end = new Date(event.endDateTime).toLocaleString();

  return (
    <Container>
      {eventFromAPI.isLoading && <Loader />}
      <Segment raised>
        <Label corner="left" color="blue" as={Link} to="/events">
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
                <Header icon="time" content={`${start} - ${end}`} />
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
              gamePieces={userGamePieces}
              onClickHandler={handlers.addGameHandler}
              itemsPerRow={10}
            />
          </Segment>
        )}
        <Button
          color="green"
          onClick={handlers.cancelHandler}
          inverted
          disabled={event.isCancelled || !event.isCurrentUserOrganising}
        >
          <Icon name="delete calendar" /> Cancel event
        </Button>
        <Button
          color="green"
          onClick={handlers.rsvpHandler}
          disabled={event.isCancelled}
          inverted
        >
          <Icon name="checkmark" />
          {!event.isCurrentUserAttending && 'RSVP'}
          {event.isCurrentUserAttending && 'Cancel RSVP'}
        </Button>
      </Segment>
    </Container>
  );
};

export default EventDetails;
