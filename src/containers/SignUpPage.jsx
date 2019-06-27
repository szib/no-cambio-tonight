import React from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Dropdown
} from 'semantic-ui-react';

import Background from '../components/Background';

const genderOptions = [
  // { key: '--', text: '--', value: '--', },
  { key: 'Male', text: 'Male', value: 'Male' },
  { key: 'Female', text: 'Female', value: 'Female' }
];

const RegistrationPage = () => {
  const handleSubmit = e => {
    console.log('event', e.target.value);
  };

  return (
    <>
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
              />
              <Form.Input
                fluid
                icon="envelope"
                iconPosition="left"
                placeholder="E-mail address"
              />
              <Form.Input
                fluid
                icon="edit"
                iconPosition="left"
                placeholder="First name"
              />
              <Form.Input
                fluid
                icon="edit"
                iconPosition="left"
                placeholder="Last name"
              />
              <Dropdown
                placeholder="Gender"
                fluid
                className="field"
                selection
                options={genderOptions}
              />

              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Confirm password"
                type="password"
                name="password_confirmation"
              />

              <Button color="black" fluid size="large">
                Sign up
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default RegistrationPage;
