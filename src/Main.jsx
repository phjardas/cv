import React, { Component } from 'react';
import { Alert, Button, Navbar } from 'react-bootstrap';
import { IndexLink } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions as authActions } from './auth';
import MainMenu from './MainMenu';

@connect(({ auth }) => ({ auth }), dispatch => bindActionCreators(authActions, dispatch))
export default class Main extends Component {
  render() {
    const { children, auth, logout } = this.props;

    return <main>
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <IndexLink to="/" className="navbar-brand">Philipp Jardas</IndexLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <MainMenu />
        </Navbar.Collapse>
      </Navbar>

      <p>Logged in as {auth.user.displayName}. <Button bsStyle='default' onClick={logout}>Log out</Button></p>

      <div className="container">
        {children}
      </div>
    </main>;
  }
}
