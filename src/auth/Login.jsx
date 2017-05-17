import React, { Component } from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
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
    return <div className="container">
      <Jumbotron style={{ 'margin-top': '50px' }}>
        <h1>Welcome!</h1>
        <div>
          <GoogleButton onClick={this.login.bind(this, 'google')} />
        </div>
      </Jumbotron>
    </div>;
  }
}
