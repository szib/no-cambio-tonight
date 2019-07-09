import React, { Suspense, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  setToAuthenticated,
  setToUnuthenticated,
  setToError
} from './redux/actions/authActions';

import 'semantic-ui-css/semantic.min.css';

import Loader from './components/LoaderWithDimmer';
import Background from './components/Background';

const AuthenticatedApp = React.lazy(() => import('./AuthenticatedApp'));
const UnauthenticatedApp = React.lazy(() => import('./UnauthenticatedApp'));

function App() {
  const authenticated = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('authenticated', authenticated);
    if (authenticated.status === 'PENDING') {
      fetch('http://localhost:3030/api/v1/validate', {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      })
        .then(resp => {
          if (!resp.ok) throw resp;
          return resp.json();
        })
        .then(json => {
          if (json.error) {
            dispatch(setToUnuthenticated());
          } else {
            dispatch(setToAuthenticated(json.token));
          }
        })
        .catch(err => {
          err.json().then(error => dispatch(setToError(error)));
        });
    }
  }, [authenticated, authenticated.status, dispatch]);

  if (authenticated.status === 'PENDING')
    return <Loader content="Authenticating..." />;
  // if (authenticated.status === 'ERROR') return <Loader content={`ERR: ${authenticated.error}`}/>;

  return (
    <>
      <Background />
      {authenticated.status === 'AUTHENTICATED' ? (
        <Suspense fallback={<Loader />}>
          <AuthenticatedApp />
        </Suspense>
      ) : (
        <Suspense fallback={<Loader />}>
          <UnauthenticatedApp />
        </Suspense>
      )}
    </>
  );
}

export default App;
