import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './styles.scss';
import store from './store/store';

import Authentication from './Authentication';
import Main from './Main';
import LanguageSwitcher from './i18n/LanguageSwitcher';

render(
  <Provider store={store}>
    <div className="page">
      <header className="page-header">
        <h1 className="title">Philipp Jardas</h1>
        <div className="subtitle">Agile Full-Stack Software Engineer</div>
        <LanguageSwitcher />
      </header>

      <Authentication>
        <Main />
      </Authentication>
    </div>
  </Provider>,
  document.getElementById('app')
);
