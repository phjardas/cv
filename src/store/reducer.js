import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import { reducer as auth } from '../auth';
import { reducer as content } from '../content';
import { reducer as i18n } from '../i18n';

export default combineReducers({
  auth,
  content,
  i18n,
  routing,
});
