import convertToCamelCase from 'lodash-humps';

import { useEffect, useState } from 'react';

const useAPI = (initialUrl, initialData) => {
  const [reload, setReload] = useState(false);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [fetchedData, setFetchedData] = useState(initialData);

  useEffect(() => {
    let unmounted = false;

    const handleFetchResponse = response => {
      if (unmounted) return initialData;

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

    if (initialUrl && !unmounted)
      fetchData().then(data => !unmounted && setFetchedData(data));

    return () => {
      setReload(false);
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, reload]);

  return { data: fetchedData, isLoading, hasError, setReload, setUrl };
};

export default useAPI;
