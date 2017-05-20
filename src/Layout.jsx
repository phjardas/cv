import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from 'classnames';

import Login from './auth/Login';
import Main from './Main';
import LanguageSwitcher from './i18n/LanguageSwitcher';
import qrcode from './img/qrcode.svg';

@connect(({ auth }) => ({ auth }))
export default class Layout extends Component {
  render() {
    const { auth } = this.props;
    const authenticated = auth && auth.user !== null;

    return <div className={classes('page', authenticated ? 'authenticated' : 'anonymous')}>
      <header className="page-header">
        <h1 className="title">Philipp Jardas</h1>
        <div className="subtitle">Agile Full-Stack Software Engineer</div>
        <LanguageSwitcher />
        {typeof window.print === 'function' && <div className="floating-action" onClick={window.print.bind(window)}>
          <i className="material-icons">print</i>
        </div>}
        <img className="qr" src={qrcode} />
      </header>

      {authenticated ? <Main /> : <Login />}
    </div>;
  }
}
