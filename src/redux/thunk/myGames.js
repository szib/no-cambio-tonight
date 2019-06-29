import convertToCamelCase from 'lodash-humps';

import {
  fetchMyGamesBegin,
  fetchMyGamesSuccess,
  fetchMyGamesFailure,
  addGameToMyGames,
  removeGameFromMyGames
} from '../actions/myGamesActions';

export function aSyncFetchMyGames() {
  return function action(dispatch) {
    dispatch(fetchMyGamesBegin());
    return fetch('http://localhost:3030/api/v1/mygames', {
      headers: { Authorization: `Bearer ${localStorage.token}` }
    })
      .then(res => res.json())
      .then(convertToCamelCase)
      .then(json => {
        if (json.error) {
          dispatch(fetchMyGamesFailure(json));
        } else {
          console.log('json', json);
          dispatch(fetchMyGamesSuccess(json));
        }
        return json;
      })
      .catch(error => {
        dispatch(fetchMyGamesFailure({ error: error.message }));
      });
  };
}

export function asyncAddGameToMyGameLibray(bgaId) {
  return function action(dispatch) {
    return fetch(`http://localhost:3030/api/v1/mygames`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        bga_id: bgaId
      })
    })
      .then(resp => resp.json())
      .then(convertToCamelCase)
      .then(json => {
        if (!json.error) {
          dispatch(addGameToMyGames(json));
        }
      })
      .catch(err => console.error('API error:', err));
  };
}

export function asyncRemoveGameFromMyGameLibray(gamePieceId) {
  return function action(dispatch) {
    return fetch(`http://localhost:3030/api/v1/mygames/${gamePieceId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.token}`
      }
    })
      .then(resp => resp.json())
      .then(convertToCamelCase)
      .then(json => {
        if (!json.error) {
          dispatch(removeGameFromMyGames(gamePieceId));
        }
      })
      .catch(err => console.error('API error:', err));
  };
}
