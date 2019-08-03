import convertToCamelCase from 'lodash-humps';

import { useState, useEffect } from 'react';

const initialProfile = {
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  memberSince: '',
  picture: {},
  gender: 0
};

const useProfile = initialToken => {
  const [profile, setProfile] = useState(initialProfile);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:3030/api/v1/profile', {
      headers: { Authorization: `Bearer ${localStorage.token}` }
    })
      .then(res => res.json())
      .then(convertToCamelCase)
      .then(json => {
        if (json.error) {
          setError(json.error);
          setIsLoading(false);
        } else {
          setProfile(json.user);
          setIsLoading(false);
        }
        return json;
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
  }, [initialToken]);

  return { user: profile, isLoading, error };
};

export default useProfile;
