import React from 'react';

import { Header } from 'semantic-ui-react';
import { DateTime } from 'luxon';

const EventDateTime = ({ event, component: Component }) => {
  Component = Component || Header;

  const start = new DateTime.fromISO(event.startDateTime).setLocale('en');
  const end = DateTime.fromISO(event.endDateTime).setLocale('en');
  const sameDay = start.hasSame(end, 'day');

  const content = sameDay
    ? `${start.toFormat('cccc, dd LLLL, yyyy t')} - ${end.toFormat('t')}`
    : `${start.toFormat('cccc, dd LLLL, yyyy t')} - ${end.toFormat(
        'dd LLLL, yyyy t'
      )}`;

  return <Component icon="time" content={content} />;
};

export default EventDateTime;
