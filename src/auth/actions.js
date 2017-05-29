export function login(payload) {
  return { type: 'auth.login', payload };
}

export function logout() {
  return { type: 'auth.logout' };
}
