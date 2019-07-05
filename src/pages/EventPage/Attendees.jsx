import React from 'react';

import { Label } from 'semantic-ui-react';

const Attendees = props => {
  return (
    <div>
      {props.attendees &&
        props.attendees.map(attendee => (
          <Label key={attendee.id} content={attendee.fullName} />
        ))}
    </div>
  );
};

export default Attendees;
