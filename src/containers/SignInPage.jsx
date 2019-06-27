import React, { useState, useEffect } from 'react';
import useTimeout from '@rooks/use-timeout';

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

import { Link, Redirect } from 'react-router-dom';

import * as AuthAPI from '../api/auth';

const SigninPage = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirectTo, setRedirectTo] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    AuthAPI.signin(username, password).then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        localStorage.setItem('token', data.token);
        setRedirectTo('/profile');
      }
    });
  };

  const { start, clear } = useTimeout(() => {
    setError('');
    clear();
  }, 2000);

  useEffect(() => {
    const token = localStorage.getItem('token');
    AuthAPI.validate(token).then(data => {
      if (token === data.token) setRedirectTo('/profile');
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
            Log-in to your account
          </Header>
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
