import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './styles.scss';
import store from './store/store';

import Authentication from './Authentication';
import Main from './Main';
import LanguageSwitcher from './i18n/LanguageSwitcher';
import qrcode from './img/qrcode.svg';

render(
  <Provider store={store}>
    <div className="page">
      <header className="page-header">
        <h1 className="title">Philipp Jardas</h1>
        <div className="subtitle">Agile Full-Stack Software Engineer</div>
        <LanguageSwitcher />
        {typeof window.print === 'function' && <div className="floating-action" onClick={window.print.bind(window)}>
          <i className="material-icons">print</i>
        </div>}
        <img className="qr" src={qrcode} />
      </header>

      <Authentication>
        <Main />
      </Authentication>
    </div>
  </Provider>,
  document.getElementById('app')
);
