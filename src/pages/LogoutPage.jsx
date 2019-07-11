import React from 'react';

import { Redirect } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setToUnuthenticated } from '../redux/actions/authActions';

const LogoutPage = () => {
  const dispatch = useDispatch();
  localStorage.removeItem('token');
  dispatch(setToUnuthenticated());
  return <Redirect to="/" />;
};

export default LogoutPage;
