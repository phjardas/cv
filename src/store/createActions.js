export default function createActions(prefix, methods = ['request', 'success', 'error']) {
  const actions = {};
  methods.forEach(method => actions[method] = `${prefix}.${method}`);
  return actions;
}
