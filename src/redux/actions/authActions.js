export const SET_TO_AUTHENTICATED = 'SET_TO_AUTHENTICATED';
export const SET_TO_UNAUTHENTICATED = 'SET_TO_UNAUTHENTICATED';
export const SET_TO_PENDING = 'SET_TO_PENDING';
export const SET_TO_ERROR = 'SET_TO_ERROR';

export const setToAuthenticated = token => ({
  type: SET_TO_AUTHENTICATED,
  token
});

export const setToUnuthenticated = () => ({
  type: SET_TO_UNAUTHENTICATED
});

export const setToPending = () => ({
  type: SET_TO_PENDING
});

export const setToError = message => ({
  type: SET_TO_ERROR,
  payload: {
    message
  }
});
