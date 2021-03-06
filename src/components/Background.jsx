import React, { useState } from 'react';

import useInteval from '../hooks/useInterval';

import { backgrounds, signInBackground } from '../lib/images';

const Background = React.memo(({ dynamic }) => {
  const [activeBackground, setActiveBackground] = useState(0);

  const style = {
    position: 'fixed',
    left: 0,
    top: 0,
    zIndex: '-1000',
    height: '100vh',
    width: '100vw',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
    transition: 'background-image 2s ease-in-out',
    backgroundImage: `url(${
      dynamic
        ? backgrounds[activeBackground % backgrounds.length]
        : signInBackground
    })`,
    overflow: 'scroll'
  };

  useInteval(() => {
    setActiveBackground(activeBackground + 1);
  }, 30000);

  return <div style={style}></div>;
});

export default Background;
