import React, { Component } from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions as authActions } from './auth';


@connect(({ auth }) => ({ auth }), dispatch => bindActionCreators(authActions, dispatch))
export default class Home extends Component {
  login(provider) {
    this.props.login({ provider });
  }

  render() {
    return <div>
      {this.renderAuth()}
    </div>;
  }

  renderAuth() {
    const { auth, logout } = this.props;

    if (auth && auth.user) {
      return <p>Logged in as {auth.user.displayName}. <Button bsStyle='default' onClick={logout}>Log out</Button></p>;
    }

    return <p>
      Log in with
      <Button bsStyle='default' onClick={this.login.bind(this, 'google')}>Google</Button>
    </p>
  }
}
