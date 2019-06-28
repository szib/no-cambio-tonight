import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchProfile } from '../redux/thunk/profile';

const useProfile = initialToken => {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch, initialToken]);

  return [profile];
};

export default useProfile;
