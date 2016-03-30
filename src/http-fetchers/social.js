import request from 'superagent';
import {api} from './../config';

export function rate(token, entityId, value) {
  let promise = new Promise((resolve, reject) => {
    request
      .post(`${api}/rate/${entityId}`)
      .send({token: token, value: value})
      .end((err, res) => {
        if (err) {
          return reject(res.body);
        }

        return resolve(res.body);
      });
  });

  return promise;
}

export function comment(token, entityId, comment) {
  let promise = new Promise((resolve, reject) => {
    request
      .post(`${api}/comment/${entityId}`)
      .send({token: token, comment: comment})
      .end((err, res) => {
        if (err) {
          return reject(res.body);
        }

        return resolve(res.body);
      });
  });

  return promise;
}