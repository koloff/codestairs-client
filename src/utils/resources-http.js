import request from 'superagent';

import {api} from './../config';

export function addResource(url) {

  let query = {
    url: url
  };


  // todo fix resolves rejects !!!!! err - contains only err, res - always available, res.text - must parse!
  let promise = new Promise((resolve, reject) => {
    request
      .post(`${api}/resources`)
      .send(query)
      .end((err, res) => {
        if (err) {
          console.log(err.reason);
          console.log(res);
          return reject(err);
        }

        resolve(res.text);
      });
  });

  return promise;
}

export function getResource(byWhat, identifier) {
  let promise = new Promise((resolve, reject) => {
    let query = {};
    query[byWhat] = identifier;
    console.log(typeof identifier);
    request
      .get(`${api}/resources`)
      .query(query)
      .end((err, res) => {
        if (err) {
          return reject(err);
        }

        console.log(res);
        console.log(err);
        console.log('errorrrrrr');

        if (res.text) {
          let text = JSON.parse(res.text);
          if (text.reason) {
            return reject(text);
          }
          return resolve(text);
        } else {
          return resolve(null);
        }
      });
  });

  return promise;
}