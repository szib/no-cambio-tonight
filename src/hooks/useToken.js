import { useState, useEffect } from 'react';

const useToken = () => {
  const localToken = localStorage.getItem('token');
  const [token, setToken] = useState('');

  useEffect(() => {
    setToken(localToken);
  }, [localToken]);

  return [token, setToken];
};

export default useToken;
