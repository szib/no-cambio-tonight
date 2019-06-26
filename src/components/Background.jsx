import React from 'react'

import backgroundImage from '../assets/images/landing_page_bg.jpg';

const style = {
  position: 'absolute',
  display: 'fixed',
  left: 0,
  top: 0,
  zIndex: '-1000',
  height: '100vh',
  width: '100vw',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundImage: `url(${backgroundImage})`
}

const Background = () => {
  return (
    <div style={style}></div>
  )
}

export default Background
