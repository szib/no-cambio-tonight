import React from 'react';

import { Table } from 'semantic-ui-react';

import EventLabels from '../../components/EventLabels';

const EventRow = ({ event, history }) => {
  const start = new Date(event.startDateTime).toLocaleString();
  const end = new Date(event.endDateTime).toLocaleString();

  return (
    <Table.Row onClick={() => history.push(`/events/${event.id}`)}>
      <Table.Cell>{event.title}</Table.Cell>
      <Table.Cell>
        <EventLabels event={event} />
      </Table.Cell>
      <Table.Cell>{event.location}</Table.Cell>
      <Table.Cell>{`${start} - ${end}`}</Table.Cell>
      <Table.Cell>
        {event.numberOfAttendees} / {event.capacity}
      </Table.Cell>
    </Table.Row>
  );
};

export default EventRow;
