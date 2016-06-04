import request from 'superagent';
import {api} from './../config';
import * as identity from '../store/identity';


export function removeEntry(options) {
  let optionsToSend = options;
  optionsToSend.token = identity.state.token;

  let promise = new Promise((resolve, reject) => {
    request
      .delete(`${api}/admin/delete`)
      .send(optionsToSend)
      .end((err, res) => {
        if (err) {
          return reject(res.body);
        }

        return resolve(res.body);
      });
  });

  return promise;
}
