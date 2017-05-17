import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import Login from './auth/Login';
import Main from './Main';


@connect(({ auth }) => ({ auth }))
export default class Authentication extends Component {
  render() {
    const { auth, children } = this.props;

    return auth && auth.user ? <Main>{children}</Main> : <Login />;
  }
}
