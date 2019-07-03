import convertToCamelCase from 'lodash-humps';

import { useEffect, useState } from 'react';

const useAPI = (initialUrl, initialData) => {
  const [url, setUrl] = useState(initialUrl);
  const [fetchedData, setFetchedData] = useState(initialData);

  const [doFetch, setDoFetch] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let mounted = true;

    const handleFetchResponse = response => {
      setHasError(!response.ok);
      setIsLoading(false);
      return response.ok && response.json
        ? response.json().then(convertToCamelCase)
        : initialData;
    };

    const fetchData = () => {
      setIsLoading(true);
      return fetch(url, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      })
        .then(handleFetchResponse)
        .catch(handleFetchResponse);
    };

    if (initialUrl && doFetch && mounted) {
      fetchData().then(data => {
        setDoFetch(false);
        setFetchedData(data);
      });
    }

    return () => {
      mounted = false;
      setDoFetch(false);
    };
  }, [url, doFetch, initialUrl, initialData]);

  const reloadHandler = () => {
    setDoFetch(true);
  };

  return {
    data: fetchedData,
    isLoading,
    hasError,
    reload: reloadHandler,
    setUrl
  };
};

export default useAPI;
