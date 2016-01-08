export function validateEmail(email) {
  let regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regEx.test(email);
}

export function validateUsername(username) {
  let regEx = /^[a-z0-9_-]{3,16}$/;
  return regEx.test(username);
}

export function validatePassword(password) {
  console.log(password.length);
  console.log('validating pass', password);

  let result = 'ok';

  if (password.length < 5) {
    result =  'too_short';
  } else if (password.length > 30) {
    result = 'too_long';
  } else if (password.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+]/) !== -1) {
    console.log('bad charrr');
    result = 'bad_char';
  }

  console.log(result);
  return result;
}