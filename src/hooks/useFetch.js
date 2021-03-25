import { useState, useEffect, useCallback } from 'react';
import Api from '../api/api';

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [options, setOptions] = useState({});

  const doFetch = useCallback((options = {}) => {
    setOptions(options);
    setIsLoading(true);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    const requestOptions = {
      ...options,
    };

    Api.get(url, requestOptions)
      .then((res) => {
        setResponse(res);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(setIsLoading(false));
  }, [isLoading, options, url]);

  return { isLoading, response, error, doFetch };
};
