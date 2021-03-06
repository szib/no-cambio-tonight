import React from 'react';

import { Redirect } from 'react-router-dom';

const LogoutPage = ({ authentication }) => {
  authentication.signout();
  return <Redirect to="/" />;
};

export default LogoutPage;
