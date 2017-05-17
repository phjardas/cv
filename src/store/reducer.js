import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import { reducer as auth } from '../auth';
import { reducer as content } from '../content';

export default combineReducers({
  auth,
  content,
  routing,
});
