import * as validator from '../utils/validator';

export default function(Vue) {

  Vue.validator('email', (value) => validator.validateEmail(value));

  Vue.validator('username', (value) => validator.validateUsername(value));

  Vue.validator('password', {
    check: (value) => {
      return validator.validatePassword(value) === 'ok'
    }
  });

}
