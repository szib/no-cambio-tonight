import { useState, useEffect } from 'react';

import useToken from './useToken';

const useAuthentication = () => {
  const [token, setToken] = useToken();
  const [authenticated, setAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const processApiResponse = json => {
    const { error } = json;
    if (error) {
      setError(error.title);
      localStorage.removeItem('token');
      setIsLoading(false);
    } else {
      localStorage.setItem('token', json.token);
      setAuthenticated(true);
      setIsLoading(false);
    }
  };

  const handleError = err => {
    localStorage.removeItem('token');
    setError('Network error. Try again later.');
    setIsLoading(false);
    setAuthenticated(false);
  };

  useEffect(() => {
    if (token) {
      setIsLoading(true);
      setError(null);
      fetch(`${process.env.REACT_APP_BACKEND_URL}/validate`, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      })
        .then(resp => {
          if (!resp.ok) throw resp;
          return resp.json();
        })
        .then(processApiResponse)
        .catch(err => {
          err.json().then(error => {
            localStorage.removeItem('token');
            setError(error);
            setIsLoading(false);
            setAuthenticated(false);
          });
        });
    } else {
      setAuthenticated(false);
      setError(null);
      setIsLoading(false);
    }
  }, [token]);

  const signup = userData => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(resp => resp.json())
      .then(processApiResponse)
      .catch(handleError);
  };

  const signin = (username, password) => {
    setIsLoading(true);
    fetch(`${process.env.REACT_APP_BACKEND_URL}/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })
      .then(resp => resp.json())
      .then(processApiResponse)
      .catch(handleError);
  };

  const signout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setAuthenticated(false);
  };

  return { status: authenticated, isLoading, error, signin, signup, signout };
};

export default useAuthentication;
