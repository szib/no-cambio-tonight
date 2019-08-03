import convertToCamelCase from 'lodash-humps';

import { useEffect, useReducer } from 'react';

const FETCH_MYGAMES_BEGIN = 'FETCH_MYGAMES_BEGIN';
const FETCH_MYGAMES_SUCCESS = 'FETCH_MYGAMES_SUCCESS';
const FETCH_MYGAMES_FAILURE = 'FETCH_MYGAMES_FAILURE';
const ADD_GAME_TO_MYGAMES = 'ADD_GAME_TO_MYGAMES';
const REMOVE_GAME_FROM_MYGAMES = 'REMOVE_GAME_FROM_MYGAMES';

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_MYGAMES_BEGIN:
      return {
        ...state,
        isLoading: true,
        error: null
      };

    case FETCH_MYGAMES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        gamePieces: action.payload.gamePieces
      };

    case FETCH_MYGAMES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
        gamePieces: []
      };

    case ADD_GAME_TO_MYGAMES:
      return {
        ...state,
        isLoading: false,
        error: null,
        gamePieces: [...state.gamePieces, action.payload.gamePiece]
      };

    case REMOVE_GAME_FROM_MYGAMES:
      return {
        ...state,
        isLoading: false,
        error: null,
        gamePieces: state.gamePieces.filter(
          gamePiece => gamePiece.id !== action.payload.gamePieceId
        )
      };

    default:
      return state;
  }
};

const fetchMyGamesBegin = () => ({
  type: FETCH_MYGAMES_BEGIN
});

const fetchMyGamesSuccess = gamePieces => ({
  type: FETCH_MYGAMES_SUCCESS,
  payload: { gamePieces }
});

const fetchMyGamesFailure = error => ({
  type: FETCH_MYGAMES_FAILURE,
  payload: { error }
});

const addGameToMyGames = gamePiece => ({
  type: ADD_GAME_TO_MYGAMES,
  payload: { gamePiece }
});

const removeGameFromMyGames = gamePieceId => ({
  type: REMOVE_GAME_FROM_MYGAMES,
  payload: { gamePieceId }
});

const initialState = {
  gamePieces: [],
  isLoading: false,
  error: null
};

const useMyGames = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch(fetchMyGamesBegin());
    fetch('http://localhost:3030/api/v1/mygames', {
      headers: { Authorization: `Bearer ${localStorage.token}` }
    })
      .then(res => res.json())
      .then(convertToCamelCase)
      .then(json => {
        if (json.error) {
          dispatch(fetchMyGamesFailure(json.error));
        } else {
          dispatch(fetchMyGamesSuccess(json.gamePieces));
        }
        return json;
      })
      .catch(error => {
        dispatch(fetchMyGamesFailure(error.statusText));
      });
  }, []);

  const addGame = bgaId => {
    return fetch(`http://localhost:3030/api/v1/mygames`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        bga_id: bgaId
      })
    })
      .then(resp => resp.json())
      .then(convertToCamelCase)
      .then(json => {
        if (!json.error) {
          dispatch(addGameToMyGames(json.gamePiece));
          return json;
        }
      })
      .catch(err => console.error('API error:', err));
  };

  const removeGame = gamePieceId => {
    return fetch(`http://localhost:3030/api/v1/mygames/${gamePieceId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.token}`
      }
    })
      .then(resp => resp.json())
      .then(convertToCamelCase)
      .then(json => {
        if (!json.error) {
          dispatch(removeGameFromMyGames(gamePieceId));
        }
      })
      .catch(err => console.error('API error:', err));
  };

  return [state, dispatch, addGame, removeGame];
};

export default useMyGames;
