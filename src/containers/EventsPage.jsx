import React, { useState } from 'react';

import { Header, Container, Input, Form } from 'semantic-ui-react';

import useProfile from '../hooks/useProfile';
import useEvents from '../hooks/useEvents';

import EventTable from '../components/Events/EventsTable';
import EventDetails from '../components/Events/EventDetails';

const EventsPage = () => {
  const [profile] = useProfile(localStorage.getItem('token'));
  const currentUserId = profile.user.id;

  const [selectedEventId, setSelectedEventId] = useState(null);
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
      {eventsAPI.isLoading && <Header as="h2">Loading...</Header>}
      {eventsAPI.hasError && <Header as="h2">Failed to fetch 😟</Header>}
      {!eventsAPI.isLoading && !eventsAPI.hasError && (
        <EventTable
          events={filteredEvents}
          selectedEventId={selectedEventId}
          selectHandler={setSelectedEventId}
          currentUserId={currentUserId}
        />
      )}
      {selectedEventId !== null && (
        <EventDetails
          setSelectedEventId={setSelectedEventId}
          selectedEventId={selectedEventId}
          reloadEventsHandler={() => eventsAPI.setReload(true)}
        ></EventDetails>
      )}
    </Container>
  );
};

export default EventsPage;
