import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Authentication from './Authentication';
import Content from './content/Content';
import menu from './menu';

export default (
  <Route path="/" component={Authentication}>
    <IndexRoute component={Content} />
    {menu.items.map(item =>
      <Route key={item.path} path={item.path} component={Content} />)}
  </Route>
);
