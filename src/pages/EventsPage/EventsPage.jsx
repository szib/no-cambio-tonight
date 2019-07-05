import React, { useState } from 'react';

import { Header, Container, Input, Form } from 'semantic-ui-react';

import useEvents from '../../hooks/useEvents';

import EventTable from './EventsTable';
import Loader from '../../components/LoaderWithDimmer';

const EventsPage = props => {
  const [searchTerm, setSearchTerm] = useState('');

  const eventsAPI = useEvents();

  const { events } = eventsAPI.data;

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchTerm)
  );
  return (
    <Container>
      <Form>
        <Input
          loading={eventsAPI.isLoading}
          fluid
          placeholder="Search events..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value.toLowerCase())}
        />
      </Form>
      {eventsAPI.isLoading && <Loader content="Loading events..." />}
      {eventsAPI.hasError && <Header as="h2">Failed to fetch</Header>}
      {!eventsAPI.isLoading && !eventsAPI.hasError && (
        <EventTable events={filteredEvents} {...props} />
      )}
    </Container>
  );
};

export default EventsPage;
