import request from 'superagent';

import {api} from './../config';

export function fetchSearch(phrase, type) {

  let promise = new Promise((resolve, reject) => {
    request
      .get(`${api}/search/${type}`)
      .query({phrase: phrase})
      .end((err, res) => {
        if (err) {
          console.log(JSON.parse(err.response.text));
          return reject(err);
        }

        return resolve(res);
      });
  });


  return promise;
}