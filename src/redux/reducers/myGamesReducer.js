import {
  FETCH_MYGAMES_BEGIN,
  FETCH_MYGAMES_SUCCESS,
  FETCH_MYGAMES_FAILURE
} from '../actions/myGamesActions';

const initialState = {
  data: [],
  loading: false,
  error: null
};

const myGamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MYGAMES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_MYGAMES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data
      };

    case FETCH_MYGAMES_FAILURE:
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

export default myGamesReducer;
