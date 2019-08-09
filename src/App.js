import React, { Suspense } from 'react';

import 'semantic-ui-css/semantic.min.css';

import useAuthentication from './hooks/useAuthentication';

import Loader from './components/LoaderWithDimmer';
import Background from './components/Background';

const AuthenticatedApp = React.lazy(() => import('./AuthenticatedApp'));
const UnauthenticatedApp = React.lazy(() => import('./UnauthenticatedApp'));

function App() {
  const authentication = useAuthentication();
  const { status, isLoading, error } = authentication;

  if (isLoading && !error) return <Loader content="Authenticating..." />;

  return (
    <>
      {status ? (
        <Suspense fallback={<Loader />}>
          <Background dynamic />
          <AuthenticatedApp authentication={authentication} />
        </Suspense>
      ) : (
        <Suspense fallback={<Loader />}>
          <Background />
          <UnauthenticatedApp authentication={authentication} />
        </Suspense>
      )}
    </>
  );
}

export default App;
