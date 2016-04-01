import request from 'superagent';
import {api} from './../config';

export function fetchSearch(type, phrase) {

  let promise = new Promise((resolve, reject) => {
    request
      .get(`${api}/search/${type}`)
      .query({phrase: phrase})
      .end((err, res) => {
        if (err) {
          return reject(res.body);
        }

        return resolve(res.body);
      });
  });

  return promise;
}