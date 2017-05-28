const reducers = {};

// load
reducers['auth.update'] = (state, { user }) => {
  return { loading: false, user };
};

export const reducer = (state = { loading: true }, action)  => {
  const { type, payload } = action;
  const reducer = reducers[type];
  return reducer ? reducer(state, payload) : state;
};
