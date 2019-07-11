import React from 'react';

import { Card } from 'semantic-ui-react';
import AttendeeAvatar from './AttendeeAvatar';

const Attendees = props => {
  return (
    <Card.Group itemsPerRow={8}>
      {props.attendees &&
        props.attendees.map(attendee => (
          <AttendeeAvatar key={attendee.id} attendee={attendee} />
        ))}
    </Card.Group>
  );
};

export default Attendees;
