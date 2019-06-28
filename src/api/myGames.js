import convertToCamelCase from 'lodash-humps';

import {
  fetchMyGamesBegin,
  fetchMyGamesSuccess,
  fetchMyGamesFailure
} from '../redux/actions/myGamesActions';

export function fetchMyGames() {
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
          dispatch(fetchMyGamesSuccess(json));
        }
        return json;
      })
      .catch(error => {
        dispatch(fetchMyGamesFailure({ error: error.message }));
      });
  };
}
