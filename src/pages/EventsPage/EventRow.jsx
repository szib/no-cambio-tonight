import React from 'react';

import { Table, Label, Icon } from 'semantic-ui-react';

import EventLabels from './EventLabels';

const EventRow = ({ event, selectHandler, active }) => {
  const start = new Date(event.startDateTime).toLocaleString();
  const end = new Date(event.endDateTime).toLocaleString();

  return (
    <Table.Row onClick={() => selectHandler(event.id)} active={active}>
      <Table.Cell>
        {event.isCurrentUserOrganising && (
          <Label ribbon color="orange">
            <Icon name="exclamation" />
          </Label>
        )}
      </Table.Cell>
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
