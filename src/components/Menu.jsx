import React, { useState } from 'react';
import { Menu, Dropdown, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import useToken from '../hooks/useToken';

import useProfile from '../hooks/useProfile';

const Menubar = props => {
  const [token] = useToken();
  const [activeItem, setActiveItem] = useState('events');
  const [profile] = useProfile(localStorage.getItem('token'));

  const menu = (
    <>
      <Menu fixed="top">
        <Menu.Item
          icon="dashboard"
          text="Dashboard"
          name="dashboard"
          active={activeItem === 'dashboard'}
          onClick={() => setActiveItem('dashboard')}
          as={Link}
          to="/dashboard"
        />
        <Menu.Item
          icon="game"
          text="My games"
          name="myGames"
          active={activeItem === 'myGames'}
          onClick={() => setActiveItem('myGames')}
          as={Link}
          to="/mygames"
        />
        <Menu.Item
          icon="search"
          text="Find new games"
          name="findNewGames"
          active={activeItem === 'findNewGames'}
          onClick={() => setActiveItem('findNewGames')}
          as={Link}
          to="/findgame"
        />

        <Menu.Item
          icon="add"
          text="New event"
          name="newEvent"
          active={activeItem === 'newEvent'}
          onClick={() => setActiveItem('newEvent')}
          as={Link}
          to="/events/new"
        />
        <Menu.Item
          icon="search"
          text="Search events"
          name="events"
          active={activeItem === 'events'}
          onClick={() => setActiveItem('events')}
          as={Link}
          to="/events"
        />
        <Menu.Item
          icon="users"
          text="Members"
          name="members"
          active={activeItem === 'members'}
          onClick={() => setActiveItem('members')}
          as={Link}
          to="/members"
        />

        <Menu.Menu position="right">
          <Dropdown
            item
            text={`Hello ${profile.user.firstName}`}
            onClick={() => setActiveItem('profile')}
          >
            <Dropdown.Menu>
              <Dropdown.Item
                icon="user"
                text="Profile"
                name="profile"
                as={Link}
                to={`/users/${profile.user.id}`}
              />
              <Dropdown.Item
                icon="game"
                text="My games"
                name="myGames"
                as={Link}
                to="/mygames"
              />
              <Divider />
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
      <div style={{ height: '80px' }}></div>
    </>
  );

  if (token) return menu;
  return null;
};

export default Menubar;
