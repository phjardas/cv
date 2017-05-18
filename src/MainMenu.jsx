import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import menu from './menu';

@connect(({ i18n }) => ({ i18n }))
export default class MainMenu extends Component {
  render() {
    const { i18n: { language }} = this.props;

    const items = menu.items.map(item =>
      <LinkContainer key={item.path} to={item.path}>
        <NavItem>{item.label[language]}</NavItem>
      </LinkContainer>);

    return <Nav>
      {items}
    </Nav>;
  }
}
