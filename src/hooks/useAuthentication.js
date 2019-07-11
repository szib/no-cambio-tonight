import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { setToUnuthenticated } from '../redux/actions/authActions';

const useAuthentication = () => {
  const authenticated = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const localToken = localStorage.token;
    if (authenticated.token !== localToken) {
      localStorage.removeItem('token');
      dispatch(setToUnuthenticated());
    }
  }, [authenticated, dispatch]);

  return authenticated;
};

export default useAuthentication;
