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
    <>
      {isCancelled && (
        <Label tag color="red">
          Cancelled
        </Label>
      )}
      {isCurrentUserOrganising && (
        <Label tag color="orange">
          My event
        </Label>
      )}
      {isCurrentUserAttending && (
        <Label tag color="blue">
          Attending
        </Label>
      )}
    </>
  );
};

export default EventLabels;
