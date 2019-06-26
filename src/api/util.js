import convertToCamelCase from 'lodash-humps';

export const BASE_URL = 'http://localhost:3030/api/v1';

export const processResponse = resp =>
  resp
    .json()
    .then(convertToCamelCase)
    .catch(err => new Promise(err)); // network error

export const addStandardHeaders = (options) => {
  const newOptions = options 
    ? Object.assign({}, options)
    : {};
  
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.token}`,
  };

  newOptions.headers = headers;
  return newOptions;
};

