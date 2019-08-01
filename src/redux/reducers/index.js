import { combineReducers } from 'redux';

import myGames from './myGamesReducer';
import auth from './authReducer';

const reducer = combineReducers({
  myGames,
  auth
});

export default reducer;
