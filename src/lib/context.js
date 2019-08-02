import React from 'react';

export const MyGamesContext = React.createContext({
  gamePieces: [],
  loading: false,
  error: null
});

export const ProfileContext = React.createContext({
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  memberSince: '',
  picture: {},
  gender: 0
});
