const reducers = {};

// load
reducers['auth.update'] = (state, { user }) => {
  return { user };
};

export const reducer = (state = {}, action)  => {
  const { type, payload } = action;
  const reducer = reducers[type];
  return reducer ? reducer(state, payload) : state;
};
