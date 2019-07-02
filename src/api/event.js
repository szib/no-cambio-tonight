// {
// 	"event": {
// 		"title": "An event",
// 		"location": "somwhere",
// 		"date_time": "2019-07-22T19:30:00.000Z"
// 	}
// }

import { BASE_URL, handleApiError } from './util';

export const createNewEvent = eventData =>
  fetch(`${BASE_URL}/events`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.token}`
    },
    body: JSON.stringify(eventData)
  })
    .then(resp => resp.json())
    .catch(handleApiError);

export const cancelEvent = eventId =>
  fetch(`${BASE_URL}/events/${eventId}/cancel`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.token}`
    }
  })
    .then(resp => resp.json())
    .catch(handleApiError);

export const rsvp = eventId =>
  fetch(`${BASE_URL}/events/${eventId}/rsvp`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.token}`
    }
  })
    .then(resp => resp.json())
    .catch(handleApiError);

export const cancelRsvp = eventId =>
  fetch(`${BASE_URL}/events/${eventId}/rsvp`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.token}`
    }
  })
    .then(resp => resp.json())
    .catch(handleApiError);

export const addGame = (eventId, gamePieceId) =>
  fetch(`${BASE_URL}/events/${eventId}/addgame`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.token}`
    },
    body: JSON.stringify({ gamepiece_id: gamePieceId })
  })
    .then(resp => resp.json())
    .catch(handleApiError);

export const removeGame = (eventId, gamePieceId) =>
  fetch(`${BASE_URL}/events/${eventId}/removegame`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.token}`
    },
    body: JSON.stringify({ gamepiece_id: gamePieceId })
  })
    .then(resp => resp.json())
    .catch(handleApiError);
