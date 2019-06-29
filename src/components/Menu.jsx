import React, { useState } from 'react';
import { Menu, Dropdown, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import useToken from '../hooks/useToken';

import useProfile from '../hooks/useProfile';

const Menubar = props => {
  const [token] = useToken();
  const [activeItem, setActiveItem] = useState('profile');
  const [profile] = useProfile(localStorage.getItem('token'));

  const menu = (
    <Menu>
      <Menu.Item
        name="games"
        active={activeItem === 'games'}
        onClick={() => setActiveItem('games')}
        as={Link}
        to="/games"
      >
        <Icon name="game"></Icon>
        Find new games
      </Menu.Item>

      <Menu.Item
        name="events"
        active={activeItem === 'events'}
        onClick={() => setActiveItem('events')}
        as={Link}
        to="/events"
      >
        <Icon name="calendar"></Icon>
        Find events
      </Menu.Item>

      <Menu.Menu position="right">
        <Dropdown item text={`Hello ${profile.user.firstName}`}>
          <Dropdown.Menu>
            <Dropdown.Item
              icon="user"
              text="Profile"
              name="profile"
              as={Link}
              to="/profile"
            />
            <Dropdown.Item
              icon="sign-out"
              text="Logout"
              name="logout"
              as={Link}
              to="/logout"
            />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
  );

  if (token) return menu;
  return null;
};

export default Menubar;
