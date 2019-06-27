import convertToCamelCase from 'lodash-humps';

import { fetchProfileBegin, fetchProfileSuccess, fetchProfileFailure } from '../redux/actions/profileActions'

export function fetchProfile() {
  return function action(dispatch) {
    dispatch(fetchProfileBegin());
    return fetch("http://localhost:3030/api/v1/profile", {
      headers: { Authorization: `Bearer ${localStorage.token}` }
    })
      .then(handleErrors)
      .then(res => res.json())
      .then(convertToCamelCase)
      .then(json => {
        dispatch(fetchProfileSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchProfileFailure(error)));
  }
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}