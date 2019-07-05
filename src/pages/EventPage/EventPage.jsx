import React, { useEffect } from 'react';

import useEvent from '../../hooks/useEvent';

import { Button, Header, Icon, Modal, Segment } from 'semantic-ui-react';

import EventLabels from './EventLabels';
import Attendees from './Attendees';
import GamePiecesList from './GameCards';

const EventDetails = props => {
  const {
    selectedEventId,
    setSelectedEventId,
    reloadEventsHandler,
    match
  } = props;

  const eventFromAPI = useEvent(match.params.id);
  const { data, eventGamePieces, userGamePieces, handlers } = eventFromAPI;
  const { event } = data;

  const closeModal = () => {
    setSelectedEventId(null);
    reloadEventsHandler();
  };

  const start = new Date(event.startDateTime).toLocaleString();
  const end = new Date(event.endDateTime).toLocaleString();

  return (
    <Modal open={selectedEventId !== null} dimmer="blurring" size="large">
      <Header icon="browser" content={event.title}></Header>
      <Header as="div">
        <EventLabels event={event} />
      </Header>
      <Modal.Content>
        <Header icon="time" content={`${start} - ${end}`} />
        <Header icon="map marker alternate" content={event.location} />
        <Segment>
          <Header content="Attendees" />
          <Attendees attendees={event.attendees} />
          <Header content="Games" />
          <GamePiecesList
            gamePieces={eventGamePieces}
            onClickHandler={handlers.removeGameHandler}
          />
        </Segment>
        {event.isCurrentUserAttending && (
          <Segment>
            <Header content="My Games" />
            <GamePiecesList
              gamePieces={userGamePieces}
              onClickHandler={handlers.addGameHandler}
            />
          </Segment>
        )}
      </Modal.Content>

      <Modal.Actions>
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
        <Button color="green" onClick={closeModal} inverted>
          <Icon name="close" /> Back
        </Button>
        <Button color="red" onClick={handlers.reload} inverted>
          <Icon name="close" /> Reload
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default EventDetails;
