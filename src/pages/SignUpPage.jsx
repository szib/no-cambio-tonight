import React, { useState } from 'react';
import useTimeout from '@rooks/use-timeout';
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Popup,
  Message,
  Divider
} from 'semantic-ui-react';
import { Redirect, Link } from 'react-router-dom';

const RegistrationPage = ({ authentication, history }) => {
  const { signup } = authentication;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const [redirectTo, setRedirectTo] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = e => {
    const userData = {
      username,
      password,
      password_confirmation: passwordConfirmation,
      first_name: firstName,
      last_name: lastName,
      email
    };
    signup(userData);
    setRedirectTo('/dashboard');
  };

  const { start, clear } = useTimeout(() => {
    setErrorMessage('error');
    clear();
  }, 2000);

  return (
    <>
      {redirectTo && <Redirect to={redirectTo} />}
      <Grid
        textAlign="center"
        style={{ height: '100vh' }}
        verticalAlign="bottom"
      >
        <Grid.Row>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Segment>
              <Header as="h2" color="black" textAlign="center">
                Register a new account
              </Header>
            </Segment>
            <Form size="large" onSubmit={handleSubmit}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="edit"
                  iconPosition="left"
                  placeholder="First name"
                  value={firstName}
                  name="firstName"
                  onChange={e => setFirstName(e.target.value)}
                />
                <Form.Input
                  fluid
                  icon="edit"
                  iconPosition="left"
                  placeholder="Last name"
                  value={lastName}
                  name="lastName"
                  onChange={e => setLastName(e.target.value)}
                />

                <Form.Input
                  fluid
                  icon="envelope"
                  iconPosition="left"
                  placeholder="E-mail address"
                  value={email}
                  name="email"
                  onChange={e => setEmail(e.target.value)}
                />
                <Divider />
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Username"
                  value={username}
                  name="username"
                  onChange={e => setUsername(e.target.value)}
                />

                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  value={password}
                  name="password"
                  onChange={e => setPassword(e.target.value)}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Confirm password"
                  type="password"
                  name="passwordConfirmation"
                  value={passwordConfirmation}
                  onChange={e => setPasswordConfirmation(e.target.value)}
                />

                <Popup
                  trigger={
                    <Button color="black" fluid size="large">
                      Sign up
                    </Button>
                  }
                  content={errorMessage}
                  open={errorMessage !== ''}
                  onOpen={start}
                />
              </Segment>
            </Form>
            <Message>
              Have an account? <Link to="/signin">Sign in</Link>
            </Message>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default RegistrationPage;
