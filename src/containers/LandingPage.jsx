import React from 'react'

import Background from '../components/Background'

import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const LandingPage = () => {
  return (
    <>
      <Background></Background>
      <Button as={Link} to='/signin'>Signin</Button>
      <Button as={Link} to='/signup'>Signup</Button>
    </>
  )
}

export default LandingPage
