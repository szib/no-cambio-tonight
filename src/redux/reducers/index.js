import { combineReducers } from 'redux';

import profile from './profileReducer';
import myGames from './myGamesReducer';
import auth from './authReducer';

const reducer = combineReducers({
  profile,
  myGames,
  auth
});

export default reducer;
