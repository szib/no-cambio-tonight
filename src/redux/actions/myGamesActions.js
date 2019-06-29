export const FETCH_MYGAMES_BEGIN = 'FETCH_MYGAMES_BEGIN';
export const FETCH_MYGAMES_SUCCESS = 'FETCH_MYGAMES_SUCCESS';
export const FETCH_MYGAMES_FAILURE = 'FETCH_MYGAMES_FAILURE';
export const ADD_GAME_TO_MYGAMES = 'ADD_GAME_TO_MYGAMES';
export const REMOVE_GAME_FROM_MYGAMES = 'REMOVE_GAME_FROM_MYGAMES';

export const fetchMyGamesBegin = () => ({
  type: FETCH_MYGAMES_BEGIN
});

export const fetchMyGamesSuccess = gamePieces => ({
  type: FETCH_MYGAMES_SUCCESS,
  payload: { gamePieces }
});

export const fetchMyGamesFailure = error => ({
  type: FETCH_MYGAMES_FAILURE,
  payload: { error }
});

export const addGameToMyGames = gamePiece => ({
  type: ADD_GAME_TO_MYGAMES,
  payload: { gamePiece }
});

export const removeGameFromMyGames = gamePieceId => ({
  type: REMOVE_GAME_FROM_MYGAMES,
  payload: { gamePieceId }
});
