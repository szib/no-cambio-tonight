import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { aSyncFetchMyGames } from '../redux/thunk/myGames';

const useMyGames = initialToken => {
  const dispatch = useDispatch();
  const myGames = useSelector(state => state.myGames);

  const findGamePieceIdByBgaId = bgaId => {
    const gamePieces = myGames.gamePieces.filter(
      myGame => myGame.game.bgaId === bgaId
    );
    if (gamePieces.length === 0) return null;
    return gamePieces[0].id;
  };

  useEffect(() => {
    dispatch(aSyncFetchMyGames());
  }, [dispatch, initialToken]);

  return [myGames, findGamePieceIdByBgaId];
};

export default useMyGames;
