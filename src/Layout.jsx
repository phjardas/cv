import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from 'classnames';
import ga from 'react-ga';

import Login from './auth/Login';
import Main from './Main';
import Loading from './Loading';
import LanguageSwitcher from './i18n/LanguageSwitcher';
import qrcode from './img/qrcode.svg';

@connect(({ auth, i18n }) => ({ auth, i18n }))
export default class Layout extends Component {
  render() {
    const authenticated = this.isAuthenticated();

    return <div className={classes('page', authenticated ? 'authenticated' : 'anonymous')}>
      <header className="page-header">
        <h1 className="title">Philipp Jardas</h1>
        <div className="subtitle">Agile Full-Stack Software Engineer</div>
        <LanguageSwitcher />
        <div className="floating-action" onClick={::this.print}>
          <i className="material-icons">print</i>
        </div>
        <img className="qr" src={qrcode} />
      </header>

      {this.props.auth.loading ? <Loading /> : (authenticated ? <Main /> : <Login />)}
    </div>;
  }

  print() {
    ga.ga('send', 'event', 'Print', 'Print');
    window.print();
  }

  isAuthenticated(auth = this.props.auth) {
    return !!auth.user;
  }

  componentDidMount() {
    this.sendPageview(this.props);
  }

  componentWillUpdate({ auth, i18n }) {
    const previouslyLoading = this.props.auth.loading;
    const nowLoading = auth.loading;

    const previouslyAuthenticated = this.isAuthenticated();
    const nowAuthenticated = this.isAuthenticated(auth);

    const previousLanguage = this.props.i18n.language;
    const nextLanguage = i18n.language;

    if (nowLoading !== previouslyLoading || nowAuthenticated !== previouslyAuthenticated || previousLanguage !== nextLanguage) {
      this.sendPageview({ auth, i18n });
    }
  }

  sendPageview({ auth, i18n }) {
    if (!auth.loading) {
      ga.ga('set', {
        page: this.isAuthenticated(auth) ? '/content' : '/login',
        dimension1: i18n.language,
      });
      ga.ga('send', 'pageview');
    }
  }
}
