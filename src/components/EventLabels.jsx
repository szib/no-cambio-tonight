import React from 'react';
import { DateTime } from 'luxon';

import { Label } from 'semantic-ui-react';

const EventLabels = props => {
  const { event } = props;
  const {
    isCurrentUserOrganising,
    isCurrentUserAttending,
    isCancelled
  } = event;

  const diffFromNow = DateTime.fromISO(event.startDateTime).diffNow().values;
  const pastEvent = diffFromNow && diffFromNow.milliseconds < 0;

  return (
    <Label.Group>
      {isCancelled && <Label color="red">Cancelled</Label>}
      {pastEvent && <Label color="violet">Past event</Label>}
      {isCurrentUserOrganising && <Label color="orange">Organiser</Label>}
      {isCurrentUserAttending && <Label color="blue">You're going</Label>}
    </Label.Group>
  );
};

export default EventLabels;
