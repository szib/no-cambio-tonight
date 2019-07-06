import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { setToUnuthenticated } from '../redux/actions/authActions';

const useAuthentication = () => {
  const authenticated = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const localToken = localStorage.token;
    // console.log('authenticated', authenticated)
    // console.log('localToken', localToken)
    // console.log('authenticated.token', authenticated.token)
    console.warn(authenticated.token !== localToken);
    if (authenticated.token !== localToken) {
      dispatch(setToUnuthenticated());
    }
  }, [authenticated, dispatch]);

  return authenticated;
};

export default useAuthentication;
