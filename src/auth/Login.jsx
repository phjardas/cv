import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GoogleButton from 'react-google-button';

import { actions as authActions } from '../auth';


@connect(({ auth }) => ({ auth }), dispatch => bindActionCreators(authActions, dispatch))
export default class Authentication extends Component {
  login(provider) {
    this.props.login({ provider });
  }

  render() {
    return <div className="login">
      <h2>Thank you for your interest in my CV</h2>
      <p>To continue, please register with one of the options below.</p>
      <GoogleButton onClick={this.login.bind(this, 'google')} />
    </div>;
  }
}
