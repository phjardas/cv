import React, { Component } from 'react';
import { Alert, Button, Glyphicon, MenuItem, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';
import { IndexLink } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PageTransition from 'react-router-page-transition';

import { actions as authActions } from './auth';
import MainMenu from './MainMenu';

@connect(({ auth }) => ({ auth }), dispatch => bindActionCreators(authActions, dispatch))
export default class Main extends Component {
  render() {
    const { children, auth, logout } = this.props;

    return <main>
      <Navbar collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <IndexLink to="/" className="navbar-brand">Philipp Jardas</IndexLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <MainMenu />
          <Nav pullRight>
            <NavDropdown title={<span><Glyphicon glyph='user' /> {auth.user.displayName}</span>} id='menu-user'>
              <MenuItem onClick={logout}>Sign out</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="container">
        <PageTransition>
          {children}
        </PageTransition>
      </div>
    </main>;
  }
}
