import useAPI from './useAPI';

const initialData = {
  events: []
};

const useEvents = eventId => {
  let url = `http://localhost:3030/api/v1/events/`;
  const eventAPI = useAPI(url, initialData);

  return eventAPI;
};

export default useEvents;
