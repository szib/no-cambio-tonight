import {
  SET_TO_AUTHENTICATED,
  SET_TO_UNAUTHENTICATED,
  SET_TO_PENDING,
  SET_TO_ERROR
} from '../actions/authActions';

const initialState = { status: 'PENDING', token: '', error: '' };

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TO_AUTHENTICATED:
      return { status: 'AUTHENTICATED', token: action.token, error: '' };

    case SET_TO_UNAUTHENTICATED:
      return { status: 'UNAUTHENTICATED', token: '', error: '' };

    case SET_TO_PENDING:
      return { status: 'PENDING', token: '', error: '' };

    case SET_TO_ERROR:
      return {
        status: 'ERROR',
        token: '',
        error: action.payload.message.error
      };

    default:
      return state;
  }
};

export default authReducer;
