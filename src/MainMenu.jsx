import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default () => (<Nav>
  <LinkContainer to="/test">
    <NavItem>Test</NavItem>
  </LinkContainer>
</Nav>);
