import { useState, useEffect } from 'react';

const useAuthentication = token => {
  const [authenticated, setAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (token) {
      setIsLoading(true);
      setError(null);
      fetch('http://localhost:3030/api/v1/validate', {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      })
        .then(resp => {
          if (!resp.ok) throw resp;
          return resp.json();
        })
        .then(json => {
          if (json.error) {
            setError(json.error);
            setIsLoading(false);
            localStorage.removeItem('token');
          } else {
            localStorage.setItem('token', json.token);
            setAuthenticated(true);
            setIsLoading(false);
          }
        })
        .catch(err => {
          err.json().then(error => {
            localStorage.removeItem('token');
            setError(error);
            setIsLoading(false);
            setAuthenticated(false);
          });
        });
    }
  }, [token]);

  const signup = userData => {
    fetch('http://localhost:3030/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(resp => {
        if (!resp.ok) throw resp;
        return resp.json();
      })
      .then(json => {
        if (json.error) {
          setError(json.error);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          localStorage.setItem('token', json.token);
          setAuthenticated(true);
        }
      });
  };

  const signin = (username, password) => {
    setIsLoading(true);
    fetch('http://localhost:3030/api/v1/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })
      .then(resp => {
        if (!resp.ok) throw resp;
        return resp.json();
      })
      .then(json => {
        if (json.error) {
          setError(json.error);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          localStorage.setItem('token', json.token);
          setAuthenticated(true);
        }
      });
  };

  const signout = () => {
    localStorage.removeItem('token');
    setAuthenticated(false);
  };

  return { status: authenticated, isLoading, error, signin, signup, signout };
};

export default useAuthentication;
