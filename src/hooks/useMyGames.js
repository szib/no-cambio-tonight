import convertToCamelCase from 'lodash-humps';

import { useState, useEffect } from 'react';

const useMyGames = () => {
  const [gamePieces, setGamePieces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3030/api/v1/mygames', {
      headers: { Authorization: `Bearer ${localStorage.token}` }
    })
      .then(res => res.json())
      .then(convertToCamelCase)
      .then(json => {
        if (json.error) {
          setGamePieces([]);
          setError(json.error);
          setIsLoading(false);
        } else {
          setGamePieces(json.gamePieces);
          setError(null);
          setIsLoading(false);
        }
        return json;
      })
      .catch(error => {
        setGamePieces([]);
        setError(error);
        setIsLoading(false);
      });
  }, []);

  return { gamePieces, isLoading, error };
};

export default useMyGames;
