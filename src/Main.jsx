import React, { Component } from 'react';
import { Alert, Navbar } from 'react-bootstrap';
import { IndexLink } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MainMenu from './MainMenu';

export default ({ children })  => (<main>
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
  <div className="container main">
    {children}
  </div>
</main>);
