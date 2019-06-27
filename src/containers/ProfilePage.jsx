import React from 'react'

import Menu from '../components/Menu'

import { Header, Container } from 'semantic-ui-react'

const ProfilePage = () => {
  return (
    <Container>
      <Menu></Menu>
      <Header as="h1" >Profile</Header>
    </Container>
  )
}

export default ProfilePage
