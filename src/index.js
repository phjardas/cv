import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import ga from 'react-ga';

import './styles.scss';
import store from './store/store';
import Layout from './Layout';

ga.initialize('UA-3900768-20');

render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById('app')
);
