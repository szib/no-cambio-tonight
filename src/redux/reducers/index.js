import { combineReducers } from 'redux';

import profile from './profileReducer';
import myGames from './myGamesReducer';

const reducer = combineReducers({
  profile,
  myGames
});

export default reducer;
