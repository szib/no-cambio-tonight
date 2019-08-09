import React, { useState } from 'react';

import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from 'semantic-ui-react';

import { Link } from 'react-router-dom';

const SigninPage = ({ authentication }) => {
  const { error, signin } = authentication;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    signin(username, password);
  };

  return (
    <>
      <Grid
        textAlign="center"
        style={{ height: '100vh' }}
        verticalAlign="middle"
      >
        <Grid.Row>
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
                <Button color="black" fluid size="large">
                  Signin
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <Link to="/signup">Sign Up</Link>
            </Message>
            {error && (
              <Message negative>
                <Message.Header>{error}</Message.Header>
              </Message>
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default SigninPage;
