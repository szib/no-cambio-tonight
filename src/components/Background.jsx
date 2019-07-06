import React from 'react';

import backgroundImage from '../assets/images/landing_page_bg.jpg';

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
  backgroundImage: `url(${backgroundImage})`,
  overflow: 'scroll'
};

const Background = () => {
  return <div style={style}></div>;
};

export default Background;
