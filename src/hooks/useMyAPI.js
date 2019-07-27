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

    const fetchData = async () => {
      setIsLoading(true);

      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      });

      setHasError(!response.ok);
      setIsLoading(false);

      if (!hasError && response.json) {
        const json = await response.json();
        return convertToCamelCase(json);
      }
      return initialData;
    };

    if (initialUrl && doFetch && mounted)
      fetchData().then(data => {
        setDoFetch(false);
        setFetchedData(data);
      });

    return () => {
      mounted = false;
      setDoFetch(false);
    };
  }, [url, doFetch, initialUrl, initialData, hasError]);

  const reloadHandler = () => {
    setDoFetch(true);
  };

  return {
    data: fetchedData,
    reload: reloadHandler,
    isLoading,
    hasError,
    setUrl,
    setFetchedData
  };
};

export default useAPI;
