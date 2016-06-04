import co from 'co';

import * as users from '../http-fetchers/users';
import * as identity from '../store/identity';

export function register(user) {
  return co(function *() {
    let result = yield users.saveUser(user);
    identity.setProfile(result.profile);
    identity.setToken(result.token);
  });
}

export function login(username, password) {
  return co(function *() {
    let result = yield users.login(username, password);
    identity.setProfile(result.profile);
    identity.setToken(result.token);
  });
}

export function loginAdmin(adminPass) {
  identity.setAdminPass(adminPass);
}

export function logout() {
  identity.setProfile(null);
  identity.setToken(null);
}