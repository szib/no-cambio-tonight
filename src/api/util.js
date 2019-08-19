import convertToCamelCase from 'lodash-humps';

export const BASE_URL = process.env.REACT_APP_BACKEND_URL;

export const processResponse = resp =>
  resp
    .json()
    .then(convertToCamelCase)
    .catch(err => new Promise(err)); // network error

export const addStandardHeaders = options => {
  const newOptions = options ? Object.assign({}, options) : {};

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.token}`
  };

  newOptions.headers = headers;
  return newOptions;
};

export const handleApiError = error => {
  console.error('API error:', error);
  return { error: error.message };
};
