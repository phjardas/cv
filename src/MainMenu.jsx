import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import menu from './menu';

export default class MainMenu extends Component {
  render() {
    const items = menu.items.map(item =>
      <LinkContainer key={item.path} to={item.path}>
        <NavItem>{item.label.en}</NavItem>
      </LinkContainer>);

    return <Nav>
      {items}
    </Nav>;
  }
}
