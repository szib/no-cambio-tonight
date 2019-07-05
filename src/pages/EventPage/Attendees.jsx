import React from 'react';

import AttendeeAvatar from './AttendeeAvatar';

const Attendees = props => {
  return (
    <div>
      {props.attendees &&
        props.attendees.map(attendee => (
          <AttendeeAvatar key={attendee.id} attendee={attendee} />
        ))}
    </div>
  );
};

export default Attendees;
