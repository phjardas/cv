const reducers = {};

reducers['content.load'] = (state, payload) => {
  return Object.assign({}, state, { _loading: true });
};

reducers['content.update'] = (state, payload) => {
  return payload;
};

export const reducer = (state = {}, action)  => {
  const { type, payload } = action;
  const reducer = reducers[type];
  return reducer ? reducer(state, payload) : state;
};
