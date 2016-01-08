import request from 'superagent';
import {api} from './../config';

export function addResource(url) {

  let query = {
    url: url
  };

  let promise = new Promise((resolve, reject) => {
    request
      .post(`${api}/resources`)
      .send(query)
      .end((err, res) => {
        let text = res.text ? JSON.parse(res.text) : '';

        if (err) {
          return reject(text);
        }

        return resolve(text);
      });
  });

  return promise;
}

export function getMultiple(start, count) {
  let promise = new Promise((resolve, reject) => {
    let query = {
      start: start,
      count: count
    };

    request
      .get(`${api}/resources`)
      .query(query)
      .end((err, res) => {
        if (err) {
          return reject(res.body);
        }

        return resolve(res.body);
      });
  });

  return promise;
}

export function getResource(byWhat, identifier) {
  let promise = new Promise((resolve, reject) => {
    let query = {};
    query[byWhat] = identifier;
    request
      .get(`${api}/resources`)
      .query(query)
      .end((err, res) => {
        if (err) {
          return reject(res.body);
        }

        return resolve(res.body);
      });
  });

  return promise;
}