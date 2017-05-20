import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LoginButton from './LoginButton';
import googleLogo from '../img/Google.svg';
import githubLogo from '../img/GitHub.svg';
import twitterLogo from '../img/Twitter.svg';

import { actions as authActions } from '../auth';


const providers = [
  { provider: 'google', logo: googleLogo, label: 'Google' },
  { provider: 'github', logo: githubLogo, label: 'GitHub' },
  { provider: 'twitter', logo: twitterLogo, label: 'Twitter' },
];

const translations = {
  en: {
    title: 'Thank you for your interest in my CV',
    body: 'To continue, please register with one of the options below.',
  },
  de: {
    title: 'Vielen Dank für Ihr Interesse an meinem Lebenslauf',
    body: 'Melden Sie sich bitte mit einer der untenstehenden Methoden an, um fortzufahren.',
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
      <div className="login-buttons">
        {providers.map(provider =>
          <LoginButton
            key={provider.provider}
            logo={provider.logo}
            label={provider.label}
            onClick={login.bind(null, { provider: provider.provider })} />
        )}
      </div>
    </div>;
  }
}
