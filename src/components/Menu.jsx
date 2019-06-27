import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class MenuExampleBasic extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item
          name="profile"
          active={activeItem === 'profile'}
          onClick={this.handleItemClick}
          as={Link}
          to="/profile"
        >
          Profile
        </Menu.Item>

        <Menu.Item
          name="games"
          active={activeItem === 'games'}
          onClick={this.handleItemClick}
          as={Link}
          to="/games"
        >
          Games
        </Menu.Item>

        <Menu.Item
          name="events"
          active={activeItem === 'events'}
          onClick={this.handleItemClick}
          as={Link}
          to="/events"
        >
          Events
        </Menu.Item>

        <Menu.Item
          name="logout"
          active={activeItem === 'logout'}
          onClick={this.handleItemClick}
          as={Link}
          to="/logout"
        >
          Logout
        </Menu.Item>
      </Menu>
    );
  }
}
