import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from './Main';
import Home from './Home';

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
  </Route>
);
