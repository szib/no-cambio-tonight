import useAPI from './useAPI';

import {
  cancelEvent,
  rsvp,
  cancelRsvp,
  addGame,
  removeGame
} from '../api/event';

const initialData = {
  event: {}
};

const initialEventGameData = {
  gamePieces: []
};

const initialUserGameData = {
  gamePieces: []
};

const useEvent = eventId => {
  let eventUrl = `http://localhost:3030/api/v1/events/${eventId}`;
  let eventGamesUrl = `http://localhost:3030/api/v1/events/${eventId}/games`;
  let userGamesUrl = `http://localhost:3030/api/v1/mygames`;

  const eventAPI = useAPI(eventUrl, initialData);
  const eventGamesAPI = useAPI(eventGamesUrl, initialEventGameData);
  const userGamesAPI = useAPI(userGamesUrl, initialUserGameData);

  const API = {};

  const handleJson = json => {
    if (json.error) {
      console.log('useEvent error: ', json);
      eventAPI.reload();
    } else {
      return json;
    }
  };

  const reload = () => {
    eventAPI.reload();
    eventGamesAPI.reload();
    userGamesAPI.reload();
  };

  const getUserGamePieces = () => {
    const eventGameIds = eventGamesAPI.data.gamePieces.map(gp => gp.id);
    return userGamesAPI.data.gamePieces
      .filter(gp => !eventGameIds.includes(gp.id))
      .map(gp => Object.assign({}, gp, { color: 'red' }));
  };

  const getEventGamePieces = () => {
    const userGameIds = userGamesAPI.data.gamePieces.map(gp => gp.id);
    return eventGamesAPI.data.gamePieces.map(gp => {
      const color = userGameIds.includes(gp.id) ? 'red' : 'blue';
      return Object.assign({}, gp, { color: color });
    });
  };

  API.hasError =
    eventAPI.hasError || eventGamesAPI.hasError || userGamesAPI.hasError;
  API.isLoading =
    eventAPI.isLoading || eventGamesAPI.isLoading || userGamesAPI.isLoading;

  API.data = eventAPI.data;
  API.eventGamePieces = getEventGamePieces();
  API.userGamePieces = getUserGamePieces();

  API.handlers = {
    cancelHandler: () => {
      cancelEvent(eventAPI.data.event.id)
        .then(handleJson)
        .then(() => {
          eventAPI.data.event.isCurrentUserAttending = !eventAPI.data.event
            .isCurrentUserAttending;
          reload();
        });
    },

    rsvpHandler: () => {
      if (eventAPI.data.event.isCancelled) return;
      if (eventAPI.data.event.isCurrentUserAttending) {
        cancelRsvp(eventAPI.data.event.id)
          .then(handleJson)
          .then(() => {
            eventAPI.data.event.isCurrentUserAttending = !eventAPI.data.event
              .isCurrentUserAttending;
            reload();
          });
      } else {
        rsvp(eventAPI.data.event.id)
          .then(handleJson)
          .then(() => {
            eventAPI.data.event.isCurrentUserAttending = !eventAPI.data.event
              .isCurrentUserAttending;
            reload();
          });
      }
    },

    addGameHandler: gamePieceId => {
      addGame(eventAPI.data.event.id, gamePieceId)
        .then(handleJson)
        .then(reload);
    },

    removeGameHandler: gamePieceId => {
      removeGame(eventAPI.data.event.id, gamePieceId)
        .then(handleJson)
        .then(reload);
    },

    reload: () => {
      reload();
    }
  };
  return API;
};

export default useEvent;
