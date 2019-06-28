import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchMyGames } from '../redux/thunk/myGames';

const useMyGames = initialToken => {
  const dispatch = useDispatch();
  const myGames = useSelector(state => state.myGames);

  useEffect(() => {
    dispatch(fetchMyGames());
  }, [dispatch, initialToken]);

  return [myGames];
};

export default useMyGames;
