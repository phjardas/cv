import React, { Component } from 'react';
import { Alert, Button, Glyphicon, MenuItem, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';
import { IndexLink } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PageTransition from 'react-router-page-transition';

import { actions as authActions } from './auth';
import { actions as i18nActions } from './i18n';
import MainMenu from './MainMenu';

@connect(
  ({ auth, i18n }) => ({ auth, i18n }),
  dispatch => bindActionCreators(Object.assign({}, authActions, i18nActions), dispatch)
)
export default class Main extends Component {
  render() {
    const { children, auth, i18n, logout, setLanguage } = this.props;
    const { language } = i18n;

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
            <NavDropdown title='Language' id='menu-language'>
              <MenuItem onClick={setLanguage.bind(null, 'en')} active={language == 'en'}>English</MenuItem>
              <MenuItem onClick={setLanguage.bind(null, 'de')} active={language == 'de'}>Deutsch</MenuItem>
            </NavDropdown>
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
