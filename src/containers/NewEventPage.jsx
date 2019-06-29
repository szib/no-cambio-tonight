import React, { useState } from 'react';

import { createNewEvent } from '../api/event';

import { Form, Container, Segment, Button } from 'semantic-ui-react';

const NewEventPage = props => {
  const [title, setTitle] = useState('title');
  const [location, setLocation] = useState('location');
  const [dateTime, setDateTime] = useState('2019-07-22T19:30:00.000Z');
  const { history } = props;

  const onSubmitHandler = () => {
    const eventData = {
      event: {
        title,
        location,
        dateTime
      }
    };
    createNewEvent(eventData).then(() => history.push('/events'));
  };

  return (
    <Container>
      <Segment>
        <Form onSubmit={onSubmitHandler}>
          <Form.Field>
            <label>Title</label>
            <input
              name="title"
              placeholder="Title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Location</label>
            <input
              name="location"
              placeholder="Location"
              value={location}
              onChange={e => setLocation(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Date Time [TODO]</label>
            <input
              name="dateTime"
              placeholder="Start date and time"
              value={dateTime}
              onChange={e => setDateTime(e.target.value)}
            />
          </Form.Field>
          <Button>Submit</Button>
        </Form>
      </Segment>
    </Container>
  );
};

export default NewEventPage;
