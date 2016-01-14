import request from 'superagent';
import {api} from './../config';

export function rate(type, token, entityId, value) {

  let query = {
    type,
    entityId,
    value
  };

  console.log(query);

  let promise = new Promise((resolve, reject) => {
    request
      .post(`${api}/rate/${type}/${entityId}`)
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