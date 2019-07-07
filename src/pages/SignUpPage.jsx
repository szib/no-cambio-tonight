import React, { useState, useEffect } from 'react';
import useTimeout from '@rooks/use-timeout';
import { Button, Form, Grid, Header, Segment, Popup } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

import * as AuthAPI from '../api/auth';
import { useDispatch } from 'react-redux';
import { setToAuthenticated } from '../redux/actions/authActions';

import Background from '../components/Background';

const RegistrationPage = ({ history }) => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const [redirectTo, setRedirectTo] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = e => {
    const userData = {
      username,
      password,
      password_confirmation: passwordConfirmation,
      first_name: firstName,
      last_name: lastName,
      email
    };
    AuthAPI.registration(userData).then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        localStorage.setItem('token', data.token);
        dispatch(setToAuthenticated(data.token));
        history.push('/');
      }
    });
  };

  const { start, clear } = useTimeout(() => {
    setError('');
    clear();
  }, 2000);

  //redirect to MyGames if we has a valid token
  useEffect(() => {
    const token = localStorage.getItem('token');
    AuthAPI.validate(token).then(data => {
      if (token === data.token) setRedirectTo('/mygames');
    });
  }, []);

  return (
    <>
      {redirectTo && <Redirect to={redirectTo} />}
      <Background />
      <Grid
        textAlign="center"
        style={{ height: '100vh' }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="black" textAlign="center">
            Register a new account
          </Header>
          <Form size="large" onSubmit={handleSubmit}>
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
              <Form.Input
                fluid
                icon="envelope"
                iconPosition="left"
                placeholder="E-mail address"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <Form.Input
                fluid
                icon="edit"
                iconPosition="left"
                placeholder="First name"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
              <Form.Input
                fluid
                icon="edit"
                iconPosition="left"
                placeholder="Last name"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Confirm password"
                type="password"
                name="password_confirmation"
                value={passwordConfirmation}
                onChange={e => setPasswordConfirmation(e.target.value)}
              />

              <Popup
                trigger={
                  <Button color="black" fluid size="large">
                    Sign up
                  </Button>
                }
                content={error}
                open={error !== ''}
                onOpen={start}
              />
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default RegistrationPage;
