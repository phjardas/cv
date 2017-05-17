import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Authentication from './Authentication';
import Home from './Home';

export default (
  <Route path="/" component={Authentication}>
    <IndexRoute component={Home} />
  </Route>
);
