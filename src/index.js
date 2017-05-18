import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Authentication from './Authentication';
import Main from './Main';
import './styles.scss';
import store from './store/store';

render(
  <Provider store={store}>
    <div className="page">
      <header className="page-header">
        <h1 className="title">Philipp Jardas</h1>
        <div className="subtitle">Agile Full-Stack Software Engineer</div>
        <a href="mailto:philipp@jardas.de" className="floating-action"><i className="material-icons">email</i></a>
      </header>

      <Authentication>
        <Main />
      </Authentication>
    </div>
  </Provider>,
  document.getElementById('app')
);
