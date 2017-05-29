const reducers = {};

reducers['i18n.setLanguage'] = (state, { language }) => {
  return Object.assign({}, state, { language });
};

export const reducer = (state = {}, action)  => {
  const { type, payload } = action;
  const reducer = reducers[type];
  return reducer ? reducer(state, payload) : state;
};