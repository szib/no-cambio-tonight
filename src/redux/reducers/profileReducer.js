import {
  FETCH_PROFILE_BEGIN,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE
} from '../actions/profileActions';

const initialUser = {
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  memberSince: '',
  picture: {},
  gender: 0
};

const initialState = {
  user: initialUser,
  loading: false,
  error: null
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILE_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.user
      };

    case FETCH_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        user: {}
      };
    default:
      return state;
  }
};

export default profileReducer;
