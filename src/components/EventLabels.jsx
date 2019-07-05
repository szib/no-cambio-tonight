import React from 'react';

import { Label } from 'semantic-ui-react';

const EventLabels = props => {
  const { event } = props;
  const {
    isCurrentUserOrganising,
    isCurrentUserAttending,
    isCancelled
  } = event;
  return (
    <Label.Group>
      {isCancelled && <Label color="red">Cancelled</Label>}
      {isCurrentUserOrganising && <Label color="orange">My event</Label>}
      {isCurrentUserAttending && <Label color="blue">Attending</Label>}
    </Label.Group>
  );
};

export default EventLabels;
