import React from 'react';

import { Image, Popup, Divider } from 'semantic-ui-react';

const AttendeeAvatar = ({ attendee }) => {
  const { picture } = attendee;

  return (
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
          size="tiny"
          centered
          verticalAlign="bottom"
        />
      }
    />
  );
};

export default AttendeeAvatar;
