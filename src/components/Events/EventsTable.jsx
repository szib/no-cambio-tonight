import React from 'react';

import { Table } from 'semantic-ui-react';

import EventRow from './EventRow';

const EventList = props => {
  const { events, selectHandler, selectedEventId, currentUserId } = props;
  // console.log('events in list', events);
  return (
    <Table celled selectable compact size="small">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell></Table.HeaderCell>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>Tags</Table.HeaderCell>
          <Table.HeaderCell>Location</Table.HeaderCell>
          <Table.HeaderCell>Date</Table.HeaderCell>
          <Table.HeaderCell>Capacity</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {events.map(event => (
          <EventRow
            key={event.id}
            event={event}
            selectHandler={selectHandler}
            active={selectedEventId === event.id}
            currentUserId={currentUserId}
          />
        ))}
      </Table.Body>
    </Table>
  );
};

export default EventList;
