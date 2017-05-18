import React, { Component } from 'react';
import { connect } from 'react-redux';

import Login from './auth/Login';


@connect(({ auth }) => ({ auth }))
export default class Authentication extends Component {
  render() {
    const { auth, children } = this.props;

    return auth && auth.user ? children : <Login />;
  }
}
