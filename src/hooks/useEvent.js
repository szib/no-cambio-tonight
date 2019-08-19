import useAPI from './useAPI';
import useMyGames from './useMyGames';

import {
  cancelEvent,
  rsvp,
  cancelRsvp,
  addGame,
  removeGame
} from '../api/event';

const useEvent = eventId => {
  const apiConfig = {
    url: `${process.env.REACT_APP_BACKEND_URL}/events/${eventId}`,
    initialData: {
      event: {
        attendees: [],
        gamepieces: []
      }
    }
  };

  const { data, error, isLoading, fetch } = useAPI(apiConfig);
  const [currentUserGames] = useMyGames();

  const getUserGamePieces = () => {
    const eventGameIds = data.event.gamepieces.map(gp => gp.id);
    return currentUserGames.gamePieces
      .filter(gp => !eventGameIds.includes(gp.id))
      .map(gp => Object.assign({}, gp, { ownedByCurrentUser: true }));
  };

  const getEventGamePieces = () => {
    const userGameIds = currentUserGames.gamePieces.map(gp => gp.id);
    return data.event.gamepieces.map(gp => {
      const ownedByCurrentUser = userGameIds.includes(gp.id);
      return Object.assign({}, gp, { ownedByCurrentUser });
    });
  };

  const handleJson = json => {
    if (json.error) {
      reload();
    } else {
      return json;
    }
  };

  const reload = () => {
    fetch();
  };

  const API = {};
  API.hasError = error || currentUserGames.hasEe;
  API.isLoading = isLoading || currentUserGames.isLoading;

  API.data = data;
  API.eventGamePieces = getEventGamePieces();
  API.userGamePieces = getUserGamePieces();

  API.handlers = {
    cancelHandler: () => {
      cancelEvent(data.event.id)
        .then(handleJson)
        .then(() => {
          data.event.isCurrentUserAttending = !data.event
            .isCurrentUserAttending;
          reload();
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
            reload();
          });
      } else {
        rsvp(data.event.id)
          .then(handleJson)
          .then(() => {
            data.event.isCurrentUserAttending = !data.event
              .isCurrentUserAttending;
            reload();
          });
      }
    },

    addGameHandler: gamePieceId => {
      addGame(data.event.id, gamePieceId)
        .then(handleJson)
        .then(reload);
    },

    removeGameHandler: gamePieceId => {
      removeGame(data.event.id, gamePieceId)
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
