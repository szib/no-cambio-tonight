import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useToken from '../hooks/useToken';

const Menubar = props => {
  const [token] = useToken();
  const [activeItem, setActiveItem] = useState('profile');
  const profile = useSelector(state => state.profile.data);

  const menu = (
    <Menu>
      <Menu.Item
        name="profile"
        active={activeItem === 'profile'}
        onClick={() => setActiveItem('profile')}
        as={Link}
        to="/profile"
      >
        Profile
      </Menu.Item>

      <Menu.Item
        name="games"
        active={activeItem === 'games'}
        onClick={() => setActiveItem('games')}
        as={Link}
        to="/games"
      >
        Games
      </Menu.Item>

      <Menu.Item
        name="events"
        active={activeItem === 'events'}
        onClick={() => setActiveItem('events')}
        as={Link}
        to="/events"
      >
        Events
      </Menu.Item>
      <Menu.Item
        name="logout"
        active={activeItem === 'logout'}
        onClick={() => setActiveItem('logout')}
        as={Link}
        to="/logout"
      >
        Logout [{profile.username}]
      </Menu.Item>
    </Menu>
  );

  if (token) return menu;
  return null;
};

export default Menubar;
