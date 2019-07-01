import React from 'react';

import { Dimmer, Loader } from 'semantic-ui-react';

const LoaderWithDimmer = props => {
  return (
    <Dimmer active page>
      <Loader size="massive">
        {props.content ? props.content : 'Loading...'}
      </Loader>
    </Dimmer>
  );
};

export default LoaderWithDimmer;
