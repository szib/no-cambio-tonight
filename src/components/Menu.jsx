import React, { useState } from 'react';
import { Menu, Dropdown, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import useToken from '../hooks/useToken';

import useProfile from '../hooks/useProfile';

const Menubar = props => {
  const [token] = useToken();
  const [activeItem, setActiveItem] = useState('profile');
  const [profile] = useProfile(localStorage.getItem('token'));

  const menu = (
    <>
      <Menu fixed="top">
        <Menu.Menu>
          <Dropdown item text="Games">
            <Dropdown.Menu>
              <Dropdown.Item
                icon="game"
                text="My games"
                name="myGames"
                as={Link}
                to="/mygames"
              />
              <Dropdown.Item
                icon="search"
                text="Find new games"
                name="findNewGames"
                as={Link}
                to="/findgame"
              />
              <Dropdown.Item
                icon="gem"
                text="Recommend games"
                name="recommendGames"
                as={Link}
                to="/recommendgames"
              />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>

        <Menu.Menu>
          <Dropdown item text="Events">
            <Dropdown.Menu>
              <Dropdown.Item
                icon="add"
                text="New event"
                name="newEvent"
                as={Link}
                to="/events/new"
              />
              <Dropdown.Item
                icon="search"
                text="Search events"
                name="events"
                as={Link}
                to="/events"
              />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>

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
