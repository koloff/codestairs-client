import request from 'superagent';
import {api} from './../config';

export function fetchSearch(phrase, type) {

  let promise = new Promise((resolve, reject) => {
    request
      .get(`${api}/search/${type}`)
      .query({phrase: phrase})
      .end((err, res) => {
        if (err) {
          return reject(res.body);
        }

        console.log(res.body);
        return resolve(res.body);
      });
  });

  return promise;
}