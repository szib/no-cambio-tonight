import { BASE_URL, handleApiError } from './util';

const SIGNIN_URL = `${BASE_URL}/signin`;
const VALIDATE_URL = `${BASE_URL}/validate`;

export const signin = (username, password) =>
  fetch(SIGNIN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  })
    .then(resp => resp.json())
    .catch(handleApiError);

export const validate = () =>
  fetch(VALIDATE_URL, {
    headers: { Authorization: `Bearer ${localStorage.token}` }
  })
    .then(resp => resp.json())
    .catch(handleApiError);
