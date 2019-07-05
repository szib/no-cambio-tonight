import React, { useState, useEffect } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { createNewEvent } from '../api/event';

import {
  Form,
  Container,
  Segment,
  Button,
  Header,
  Input
} from 'semantic-ui-react';

const NewEventPage = props => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [startDateTime, setStartDateTime] = useState(new Date());
  const [endDateTime, setEndDateTime] = useState(new Date());
  const [goodToGo, setGoodToGo] = useState(false);
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

  useEffect(() => {
    if (
      title.length > 5 &&
      location.length > 5 &&
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
          <Form.Field>
            <label>What?</label>
            <Input
              icon="calendar check outline"
              iconPosition="left"
              name="title"
              placeholder="Title (min. 5 letters)"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Where?</label>
            <Input
              icon="map outline"
              iconPosition="left"
              name="location"
              placeholder="Location  (min. 5 letters)"
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
              onChange={e => setStartDateTime(e)}
              showTimeSelect
              dateFormat="MMMM d, yyyy h:mm aa"
              timeCaption="time"
            />

            <DatePicker
              selected={endDateTime}
              selectsEnd
              startDate={startDateTime}
              endDate={endDateTime}
              onChange={e => setEndDateTime(e)}
              minTime={startDateTime}
              maxTime={startDateTime.getTime() + 120 * 60000}
              showTimeSelect
              dateFormat="MMMM d, yyyy h:mm aa"
              timeCaption="time"
            />
          </Form.Field>
          <Button fluid primary disabled={!goodToGo}>
            Submit
          </Button>
        </Form>
      </Segment>
    </Container>
  );
};

export default NewEventPage;
