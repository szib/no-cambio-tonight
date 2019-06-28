import {
  FETCH_MYGAMES_BEGIN,
  FETCH_MYGAMES_SUCCESS,
  FETCH_MYGAMES_FAILURE,
  ADD_GAME_TO_MYGAMES,
  REMOVE_GAME_FROM_MYGAMES
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
        data: []
      };

    case ADD_GAME_TO_MYGAMES:
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data, action.payload.game]
      };

    case REMOVE_GAME_FROM_MYGAMES:
      console.log('action', action);
      return {
        ...state,
        loading: false,
        error: null,
        data: state.data.filter(
          gamePiece => gamePiece.id !== action.payload.gamePieceId
        )
      };

    default:
      return state;
  }
};

export default myGamesReducer;
