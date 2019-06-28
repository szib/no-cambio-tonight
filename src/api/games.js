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

export const addGameToMyGameLibray = bgaId =>
  fetch(`${BASE_URL}/mygames`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${localStorage.token}` },
    body: JSON.stringify({ bga_id: bgaId })
  })
    .then(resp => resp.json())
    .then(convertToCamelCase)
    .then(d => {
      console.table(d);
      return d;
    })
    .catch(err => console.error('API error:', err));
