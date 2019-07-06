import React from 'react';

import { Table } from 'semantic-ui-react';

import EventLabels from '../../components/EventLabels';
import EventDateTime from '../../components/EventDateTime';

const EventRow = ({ event, history }) => {
  return (
    <Table.Row onClick={() => history.push(`/events/${event.id}`)}>
      <Table.Cell>{event.title}</Table.Cell>
      <Table.Cell>
        <EventLabels event={event} />
      </Table.Cell>
      <Table.Cell>{event.location}</Table.Cell>
      <EventDateTime component={Table.Cell} event={event} />
      <Table.Cell>
        {event.numberOfAttendees} / {event.capacity}
      </Table.Cell>
    </Table.Row>
  );
};

export default EventRow;
