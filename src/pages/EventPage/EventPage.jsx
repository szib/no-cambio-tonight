import React from 'react';

import { DateTime } from 'luxon';

import { Link } from 'react-router-dom';

import useEvent from '../../hooks/useEvent';
import useComments from '../../hooks/useComments';
import useAuthentication from '../../hooks/useAuthentication';

import {
  Button,
  Header,
  Icon,
  Segment,
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
import LabelBack from '../../components/LabelBack';

import Comments from '../../components/Comments/Comments';

const EventDetails = ({ match, history }) => {
  useAuthentication();
  const eventFromAPI = useEvent(match.params.id);
  const commentsFromAPI = useComments({ path: '/events', id: match.params.id });

  const { data, eventGamePieces, userGamePieces, handlers } = eventFromAPI;
  const { event } = data;
  const eventIsFullAndUserIsNotAttending =
    event.capacity <= event.numberOfAttendees && !event.isCurrentUserAttending;

  const diffFromNow = DateTime.fromISO(event.startDateTime).diffNow().values;
  const editable = diffFromNow && diffFromNow.milliseconds > 0;

  return (
    <Container>
      {eventFromAPI.isLoading && <Loader />}
      <Segment raised>
        <LabelBack />
        <Segment>
          <Grid columns="two" divided>
            <Grid.Column>
              <Header icon="browser" content={event.title}></Header>
              <EventLabels event={event} />
              <EventDateTime event={event} />
              <Header icon="map marker alternate" content={event.location} />
            </Grid.Column>
            <Grid.Column>
              <Header content="Attendees" />
              <Attendees attendees={event.attendees} />
              <Divider />
              <Header content="Games at the event" />
              {eventGamePieces.length > 0 ? (
                <GameCards
                  editable={editable}
                  eventCancelled={event.isCancelled}
                  gamePieces={eventGamePieces}
                  onClickHandler={handlers.removeGameHandler}
                />
              ) : (
                <Header as="h2">
                  It's going to be boring without games... Bring a few.
                </Header>
              )}
            </Grid.Column>
          </Grid>
        </Segment>

        {editable && event.isCurrentUserAttending && (
          <Segment>
            <Header content="My Games" />
            {userGamePieces.length > 0 ? (
              <GameCards
                editable={editable}
                eventCancelled={event.isCancelled}
                gamePieces={userGamePieces}
                onClickHandler={handlers.addGameHandler}
                itemsPerRow="ten"
              />
            ) : (
              <Header as="h2">
                No more games to bring...
                <Link to="/findgame">Find a few</Link>
              </Header>
            )}
          </Segment>
        )}

        {editable && (
          <Container textAlign="right">
            {!(event.isCancelled || !event.isCurrentUserOrganising) && (
              <Popup
                on="click"
                trigger={
                  <Button
                    color="red"
                    disabled={
                      event.isCancelled || !event.isCurrentUserOrganising
                    }
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
        )}
      </Segment>

      <Comments comments={event.comments} API={commentsFromAPI} />
    </Container>
  );
};

export default EventDetails;
