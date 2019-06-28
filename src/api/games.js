import convertToCamelCase from 'lodash-humps';

import { BASE_URL } from './util';

export const searchGamesByName = name =>
  fetch(`${BASE_URL}/games/search?name=${name}`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${localStorage.token}` }
  })
    .then(resp => resp.json())
    .then(convertToCamelCase)
    .catch(err => console.error('API error:', err));
