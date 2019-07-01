import React from 'react';

import useEvent from '../../hooks/useEvent';

import { Button, Header, Icon, Modal, Label } from 'semantic-ui-react';

import EventLabels from './EventLabels';

const EventDetails = ({
  selectedEventId,
  setSelectedEventId,
  reloadEventsHandler
}) => {
  const eventFromAPI = useEvent(selectedEventId);
  const { data, handlers } = eventFromAPI;
  const { event } = data;

  const closeModal = () => {
    setSelectedEventId(null);
    reloadEventsHandler();
  };

  return (
    <Modal open={selectedEventId !== null} dimmer="blurring" size="large">
      <Header icon="browser" content={event.title}></Header>
      <Header as="div">
        <EventLabels event={event} />
      </Header>
      <Modal.Content>
        <Header icon="time" content={event.location} />
        <Header icon="map marker alternate" content={event.dateTime} />
      </Modal.Content>
      <Modal.Actions>
        <Button
          color="green"
          onClick={handlers.cancelHandler}
          inverted
          disabled={event.isCancelled}
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
      </Modal.Actions>
    </Modal>
  );
};

export default EventDetails;
