import React from 'react';
import { DateTime } from 'luxon';
import { Table } from 'semantic-ui-react';

import EventLabels from '../../components/EventLabels';
import EventDateTime from '../../components/EventDateTime';

const EventRow = ({ event, history }) => {
  const diffFromNow = DateTime.fromISO(event.startDateTime).diffNow().values;
  const pastEvent = diffFromNow && diffFromNow.milliseconds > 0;

  return (
    <Table.Row
      onClick={() => history.push(`/events/${event.id}`)}
      positive={pastEvent}
      negative={!pastEvent}
    >
      <Table.Cell>
        {event.title}
        <EventLabels event={event} />
      </Table.Cell>
      <EventDateTime component={Table.Cell} event={event} />
      <Table.Cell>
        {event.numberOfAttendees} / {event.capacity}
      </Table.Cell>
    </Table.Row>
  );
};

export default EventRow;
