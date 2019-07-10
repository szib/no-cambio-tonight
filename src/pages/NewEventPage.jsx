import React, { useState, useEffect } from 'react';
import useAuthentication from '../hooks/useAuthentication';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { createNewEvent } from '../api/event';

import {
  Form,
  Container,
  Segment,
  Button,
  Header,
  Input,
  Select
} from 'semantic-ui-react';

const NewEventPage = props => {
  useAuthentication();

  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [startDateTime, setStartDateTime] = useState(new Date());
  const [endDateTime, setEndDateTime] = useState(new Date());
  const [capacity, setCapacity] = useState(20);
  const [goodToGo, setGoodToGo] = useState(false);
  const { history } = props;

  const capacityOptions = Array.from(Array(31), (x, i) => ({
    key: i + 10,
    text: i + 10,
    value: i + 10
  }));

  const onSubmitHandler = () => {
    const eventData = {
      event: {
        title,
        location,
        start_date_time: startDateTime,
        end_date_time: endDateTime,
        capacity
      }
    };
    createNewEvent(eventData).then(() => history.push('/events'));
  };

  useEffect(() => {
    if (startDateTime > endDateTime) setEndDateTime(startDateTime);
  }, [endDateTime, startDateTime]);

  useEffect(() => {
    if (
      title.length >= 5 &&
      location.length >= 5 &&
      startDateTime < endDateTime
    ) {
      setGoodToGo(true);
    } else {
      setGoodToGo(false);
    }
  }, [title, location, startDateTime, endDateTime]);

  return (
    <Container>
      <Segment raised>
        <Header as="h1">New Event</Header>
        <Form onSubmit={onSubmitHandler}>
          <Form.Field
            required
            error={title.length <= 5}
            control={Input}
            label="What?"
            icon="calendar check outline"
            iconPosition="left"
            name="title"
            placeholder="Title (min. 5 letters)"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />

          <Form.Field
            required
            error={location.length <= 5}
            control={Input}
            label="Where?"
            icon="map outline"
            iconPosition="left"
            name="location"
            placeholder="Location  (min. 5 letters)"
            value={location}
            onChange={e => setLocation(e.target.value)}
          />
          <Form.Group inline>
            <Form.Field
              required
              control={DatePicker}
              label="Starts?"
              selected={startDateTime}
              selectsStart
              startDate={startDateTime}
              endDate={endDateTime}
              onChange={e => setStartDateTime(e)}
              showTimeSelect
              dateFormat="MMMM d, yyyy h:mm aa"
              timeCaption="time"
            />
            <Form.Field
              required
              error={startDateTime >= endDateTime}
              control={DatePicker}
              label="Ends?"
              selected={endDateTime}
              selectsEnd
              startDate={startDateTime}
              endDate={endDateTime}
              onChange={e => setEndDateTime(e)}
              minTime={startDateTime}
              maxTime={startDateTime.getTime() + 600 * 60000}
              showTimeSelect
              dateFormat="MMMM d, yyyy h:mm aa"
              timeCaption="time"
            />
          </Form.Group>

          <Form.Field
            required
            control={Select}
            label=" Venue capacity"
            value={capacity}
            options={capacityOptions}
            onChange={(e, data) => setCapacity(data.value)}
          />
          <Button fluid primary disabled={!goodToGo}>
            Submit
          </Button>
        </Form>
      </Segment>
    </Container>
  );
};

export default NewEventPage;
