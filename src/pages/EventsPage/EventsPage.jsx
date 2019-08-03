import React, { useState } from 'react';

import { Header, Container, Input, Form } from 'semantic-ui-react';

import useAPI from '../../hooks/useAPI';

import EventTable from './EventsTable';
import Loader from '../../components/LoaderWithDimmer';

const apiConfig = {
  url: `http://localhost:3030/api/v1/events/`,
  initialData: {
    events: []
  }
};

const EventsPage = props => {
  const [searchTerm, setSearchTerm] = useState('');

  const { data, error, isLoading } = useAPI(apiConfig);
  const { events } = data;

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchTerm)
  );

  return (
    <Container>
      <Form>
        <Input
          loading={isLoading}
          fluid
          placeholder="Search events..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value.toLowerCase())}
        />
      </Form>
      {isLoading && <Loader content="Loading events..." />}
      {error && <Header as="h2">Failed to fetch</Header>}
      {!isLoading && !error && (
        <EventTable events={filteredEvents} {...props} />
      )}
    </Container>
  );
};

export default EventsPage;
