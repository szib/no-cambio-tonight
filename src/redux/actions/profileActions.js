export const FETCH_PROFILE_BEGIN = 'FETCH_PROFILE_BEGIN';
export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS';
export const FETCH_PROFILE_FAILURE = 'FETCH_PROFILE_FAILURE';

export const fetchProfileBegin = () => ({
  type: FETCH_PROFILE_BEGIN
});

export const fetchProfileSuccess = data => ({
  type: FETCH_PROFILE_SUCCESS,
  payload: { data }
});

export const fetchProfileFailure = error => ({
  type: FETCH_PROFILE_FAILURE,
  payload: { error }
});
