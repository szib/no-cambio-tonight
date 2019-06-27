import React from 'react'

import { Redirect } from 'react-router-dom'

const LogoutPage = () => {
  localStorage.removeItem('token')
  return (
    <Redirect to='/' />
  )
}

export default LogoutPage
