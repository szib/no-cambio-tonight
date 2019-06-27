import React from 'react'
import { connect } from 'react-redux'

import Menu from '../components/Menu'

import { Header, Container } from 'semantic-ui-react'

class ProfilePage extends React.Component {

  render() {
    const { firstName, lastName, username, memberSince, email } = this.props.profile
    return (
      <Container>
        <Menu></Menu>
        <Header as="h1" >{firstName} {lastName}</Header>
        <ul>
          <li>{email}</li>
          <li>{memberSince}</li>
          <li>{username}</li>
        </ul>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  profile: state.profile
})

export default connect(mapStateToProps)(ProfilePage)
