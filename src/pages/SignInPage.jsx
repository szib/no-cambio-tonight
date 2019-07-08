import React, { useState } from 'react';
import useTimeout from '@rooks/use-timeout';

import { useDispatch } from 'react-redux';
import { setToAuthenticated } from '../redux/actions/authActions';

import Background from '../components/Background';

import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  Popup
} from 'semantic-ui-react';

import { Link } from 'react-router-dom';

import * as AuthAPI from '../api/auth';

const SigninPage = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    AuthAPI.signin(username, password).then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        localStorage.setItem('token', data.token);
        dispatch(setToAuthenticated(data.token));
      }
    });
  };

  const { start, clear } = useTimeout(() => {
    setError('');
    clear();
  }, 2000);

  return (
    <>
      <Background />
      <Grid
        textAlign="center"
        style={{ height: '100vh' }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Segment>
            <Header as="h2" color="black" textAlign="center">
              Log-in to your account
            </Header>
          </Segment>
          <Form size="large" onSubmit={handleSubmit}>
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Username"
                name="username"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <Popup
                trigger={
                  <Button color="black" fluid size="large">
                    Signin
                  </Button>
                }
                content={error}
                open={error !== ''}
                onOpen={start}
              />
            </Segment>
          </Form>
          <Message>
            New to us? <Link to="/signup">Sign Up</Link>
          </Message>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default SigninPage;
