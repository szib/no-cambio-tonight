import { combineReducers } from 'redux';

import myGames from './myGamesReducer';

const reducer = combineReducers({
  myGames
});

export default reducer;
