import React, { useState, useEffect } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { createNewEvent } from '../api/event';

import { Form, Container, Segment, Button, Header } from 'semantic-ui-react';

const NewEventPage = props => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [startDateTime, setStartDateTime] = useState(new Date());
  const [endDateTime, setEndDateTime] = useState(new Date());
  const { history } = props;

  const onSubmitHandler = () => {
    const eventData = {
      event: {
        title,
        location,
        start_date_time: startDateTime,
        end_date_time: endDateTime
      }
    };
    createNewEvent(eventData).then(() => history.push('/events'));
  };

  return (
    <Container>
      <Segment>
        <Header>New Event</Header>
        <Form onSubmit={onSubmitHandler}>
          <Form.Field>
            <label>What?</label>
            <input
              name="title"
              placeholder="Title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Where?</label>
            <input
              name="location"
              placeholder="Location"
              value={location}
              onChange={e => setLocation(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>When?</label>
            <DatePicker
              selected={startDateTime}
              selectsStart
              startDate={startDateTime}
              endDate={endDateTime}
              onChange={setStartDateTime}
              showTimeSelect
              dateFormat="MMMM d, yyyy h:mm aa"
              timeCaption="time"
            />

            <DatePicker
              selected={endDateTime}
              selectsEnd
              startDate={startDateTime}
              endDate={endDateTime}
              onChange={setEndDateTime}
              minTime={startDateTime}
              maxTime={startDateTime.getTime() + 120 * 60000}
              showTimeSelect
              dateFormat="MMMM d, yyyy h:mm aa"
              timeCaption="time"
            />
          </Form.Field>
          <Button>Submit</Button>
        </Form>
      </Segment>
    </Container>
  );
};

export default NewEventPage;
