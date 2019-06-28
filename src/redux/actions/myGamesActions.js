export const FETCH_MYGAMES_BEGIN = 'FETCH_MYGAMES_BEGIN';
export const FETCH_MYGAMES_SUCCESS = 'FETCH_MYGAMES_SUCCESS';
export const FETCH_MYGAMES_FAILURE = 'FETCH_MYGAMES_FAILURE';

export const fetchMyGamesBegin = () => ({
  type: FETCH_MYGAMES_BEGIN
});

export const fetchMyGamesSuccess = data => ({
  type: FETCH_MYGAMES_SUCCESS,
  payload: { data }
});

export const fetchMyGamesFailure = error => ({
  type: FETCH_MYGAMES_FAILURE,
  payload: { error }
});
