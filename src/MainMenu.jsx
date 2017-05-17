import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

@connect(({ content }) => ({ menu: content.menu }))
export default class MainMenu extends Component {
  render() {
    const { menu } = this.props;

    const items = menu && menu.items && menu.items.map(item =>
      <LinkContainer key={item.path} to={item.path}>
        <NavItem>{item.label.en}</NavItem>
      </LinkContainer>);

    return <Nav>
      {items}
    </Nav>;
  }
}
