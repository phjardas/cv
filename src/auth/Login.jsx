import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GoogleButton from 'react-google-button';

import { actions as authActions } from '../auth';


const translations = {
  en: {
    title: 'Thank you for your interest in my CV',
    body: 'To continue, please register with one of the options below.',
    buttons: {
      google: 'Sign in with Google'
    }
  },
  de: {
    title: 'Vielen Dank für Ihr Interesse an meinem Lebenslauf',
    body: 'Melden Sie sich bitte mit einer der untenstehenden Methoden an, um fortzufahren.',
    buttons: {
      google: 'Mit Google anmelden'
    }
  }
};


@connect(({ auth, i18n }) => ({ auth, i18n }), dispatch => bindActionCreators(authActions, dispatch))
export default class Authentication extends Component {
  render() {
    const { i18n: { language }, login } = this.props;
    const labels = translations[language];

    return <div className="login">
      <h2>{labels.title}</h2>
      <p>{labels.body}</p>
      <GoogleButton onClick={login.bind(null, { provider: 'google' })} label={labels.buttons.google} />
    </div>;
  }
}
