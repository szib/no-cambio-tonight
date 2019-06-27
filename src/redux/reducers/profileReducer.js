import { FETCH_PROFILE_BEGIN, FETCH_PROFILE_SUCCESS, FETCH_PROFILE_FAILURE } from '../actions/profileActions'


const initialState = {
  data: {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    memberSince: '',
    gender: 0
  },
  loading: false,
  error: null
}

const profileReducer = (state=initialState, action) => {
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
        data: action.payload.data
      };

    case FETCH_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        data: {}
      };
    default:
      return state;
  }
};

export default profileReducer