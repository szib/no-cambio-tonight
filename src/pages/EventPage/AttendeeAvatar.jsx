import React from 'react';
import { Link } from 'react-router-dom';

import { Image, Popup, Divider, Card } from 'semantic-ui-react';

const AttendeeAvatar = ({ attendee }) => {
  const { picture } = attendee;

  return (
    <Card as={Link} to={`/users/${attendee.id}`}>
      <Popup
        header={attendee.fullName}
        content={
          <>
            <Divider />
            <div>Organised events: {attendee.numberOfOrganisedEvents}</div>
            <div>Attended events: {attendee.numberOfAttendedEvents}</div>
          </>
        }
        trigger={
          <Image
            src={picture.medium}
            avatar
            size="massive"
            centered
            verticalAlign="bottom"
          />
        }
      />
    </Card>
  );
};

export default AttendeeAvatar;
