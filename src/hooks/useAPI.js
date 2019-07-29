import convertToCamelCase from 'lodash-humps';

import { useAPI as useAxios } from 'react-api-hooks';

const useAPI = apiConfig => {
  const { url, initialData = {} } = apiConfig;

  const options = {
    headers: {
      Authorization: `Bearer ${localStorage.token}`
    }
  };

  // { data, response, error, isLoading, setData, fetch }
  const API = useAxios(url, options);
  API.data = API.data || initialData;
  API.data = convertToCamelCase(API.data);

  return API;
};

export default useAPI;
