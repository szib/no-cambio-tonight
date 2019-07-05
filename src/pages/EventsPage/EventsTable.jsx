import React from 'react';

import { Table } from 'semantic-ui-react';

import EventRow from './EventRow';

const EventList = props => {
  const { events } = props;

  return (
    <Table celled selectable compact size="small">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>Tags</Table.HeaderCell>
          <Table.HeaderCell>Location</Table.HeaderCell>
          <Table.HeaderCell>Date</Table.HeaderCell>
          <Table.HeaderCell>Capacity</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {events.map(event => (
          <EventRow key={event.id} event={event} {...props} />
        ))}
      </Table.Body>
    </Table>
  );
};

export default EventList;
