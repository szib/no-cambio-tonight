import React from 'react'
import { connect } from 'react-redux'

import Menu from '../components/Menu'

import { Header, Container } from 'semantic-ui-react'

import { fetchProfile } from '../api/profile'

class ProfilePage extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProfile());
  }

  render() {
    const { error, loading, data } = this.props
    const { firstName, lastName, username, memberSince, email } = data

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    return (
      <Container>
        <Menu></Menu>
        {loading
          ? <Header as="h1" >Loading...</Header>
          : (
            <>
              <Header as="h1" >{firstName} {lastName}</Header>
              <ul>
                <li>{email}</li>
                <li>{memberSince}</li>
                <li>{username}</li>
              </ul>
            </>
          )
        }
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  data: state.profile.data,
  loading: state.profile.loading,
  error: state.profile.error
})

export default connect(mapStateToProps)(ProfilePage)
