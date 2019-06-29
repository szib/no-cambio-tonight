import React from 'react';

import { Table, Label, Icon } from 'semantic-ui-react';

const EventRow = ({ event, selectHandler, active }) => {
  return (
    <Table.Row onClick={() => selectHandler(event.id)} active={active}>
      <Table.Cell>
        {event.isCurrentUserOrganising && (
          <Label ribbon color="orange">
            <Icon name="exclamation" />
          </Label>
        )}
        {event.title}
      </Table.Cell>
      <Table.Cell>
        {event.isCancelled && <Label color="red">Cancelled</Label>}
        {event.isCurrentUserAttending && <Label color="blue">Attending</Label>}
      </Table.Cell>
      <Table.Cell>{event.location}</Table.Cell>
      <Table.Cell>{event.dateTime}</Table.Cell>
      <Table.Cell>
        {event.numberOfAttendees} / {event.capacity}
      </Table.Cell>
    </Table.Row>
  );
};

export default EventRow;
