import convertToCamelCase from 'lodash-humps';

import {
  fetchProfileBegin,
  fetchProfileSuccess,
  fetchProfileFailure
} from '../actions/profileActions';

export function asyncFetchProfile() {
  return function action(dispatch) {
    dispatch(fetchProfileBegin());
    return fetch('http://localhost:3030/api/v1/profile', {
      headers: { Authorization: `Bearer ${localStorage.token}` }
    })
      .then(res => res.json())
      .then(convertToCamelCase)
      .then(json => {
        if (json.error) {
          dispatch(fetchProfileFailure(json.error));
        } else {
          dispatch(fetchProfileSuccess(json.user));
        }
        return json;
      })
      .catch(error => {
        dispatch(fetchProfileFailure({ error: error.message }));
      });
  };
}
