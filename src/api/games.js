import { BASE_URL } from './util'

export const searchGamesByName = (name) =>
  fetch(`${BASE_URL}/games/search?name=${name}`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${localStorage.token}` },
  })
    .then(resp => resp.json())
    .catch(err => console.error('API error:', err))
