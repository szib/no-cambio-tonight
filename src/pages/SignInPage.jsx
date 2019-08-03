import React, { useState } from 'react';
import useTimeout from '@rooks/use-timeout';

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

const SigninPage = ({ authentication }) => {
  const { error, signin } = authentication;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    signin(username, password);
  };

  const { start, clear } = useTimeout(() => {
    setErrorMessage(error);
    clear();
  }, 2000);

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
                <Popup
                  trigger={
                    <Button color="black" fluid size="large">
                      Signin
                    </Button>
                  }
                  content={errorMessage}
                  open={errorMessage !== ''}
                  onOpen={start}
                />
              </Segment>
            </Form>
            <Message>
              New to us? <Link to="/signup">Sign Up</Link>
            </Message>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default SigninPage;
