import useAPI from './useAPI';

import { cancelEvent, rsvp, cancelRsvp } from '../api/event';

const initialData = {
  event: {}
};

const useEvent = eventId => {
  let url = `http://localhost:3030/api/v1/events/${eventId}`;
  const eventAPI = useAPI(url, initialData);
  const { data, setReload } = eventAPI;

  const handleJson = json => {
    if (json.error) {
      console.log('useEvent error: ', json);
      setReload(true);
    } else {
      return json;
    }
  };

  eventAPI.handlers = {
    cancelHandler: () => {
      cancelEvent(data.event.id)
        .then(handleJson)
        .then(() => {
          data.event.isCurrentUserAttending = !data.event
            .isCurrentUserAttending;
          setReload(true);
        });
    },

    rsvpHandler: () => {
      if (data.event.isCancelled) return;
      if (data.event.isCurrentUserAttending) {
        cancelRsvp(data.event.id)
          .then(handleJson)
          .then(() => {
            data.event.isCurrentUserAttending = !data.event
              .isCurrentUserAttending;
            setReload(true);
          });
      } else {
        rsvp(data.event.id)
          .then(handleJson)
          .then(() => {
            data.event.isCurrentUserAttending = !data.event
              .isCurrentUserAttending;
            setReload(true);
          });
      }
    }
  };
  return eventAPI;
};

export default useEvent;
