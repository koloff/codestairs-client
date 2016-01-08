import request from 'superagent';
import {api} from '../config';

export function saveUser(user) {
  let query = {
    email: user.email,
    username: user.username,
    password: user.password
  };

  let promise = new Promise((resolve, reject) => {
    request
      .post(`${api}/users`)
      .send(query)
      .end((err, res) => {
        if (err) {
          return reject(res.body);
        }

        return resolve(res.body);
      });
  });

  return promise;
}

export function login(username, password) {
  let promise = new Promise((resolve, reject) => {
    request
      .post(`${api}/login`)
      .send({
        username: username,
        password: password
      })
      .end((err, res) => {
        if (err) {
          return reject(res.body);
        }

        return resolve(res.body);
      });
  });

  return promise;
}