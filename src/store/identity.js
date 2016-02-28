import * as localStorage from '../utils/local-storage';

export let state = {
  authenticated: false,
  token: null,
  profile: null
};


export function setToken(tokenToSet) {
  state.token = tokenToSet;
  localStorage.setObject('token', tokenToSet);

  // if token is truthy authenticate
  state.authenticated = !!tokenToSet;
}

export function setProfile(userObj) {
  state.profile = userObj;
  localStorage.setObject('profile', userObj);
}
