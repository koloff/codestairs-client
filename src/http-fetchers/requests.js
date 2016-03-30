import request from 'superagent';
import {api} from './../config';
import * as identity from '../store/identity';


export function addRequest(requestData) {

  console.log('reqeustdata');
  console.log(requestData);

  let promise = new Promise((resolve, reject) => {
    request
      .post(`${api}/requests`)
      .send({token: identity.state.token, requestData: requestData})
      .end((err, res) => {
        if (err) {
          return reject(res.body);
        }

        return resolve(res.body);
      });
  });

  return promise;
}


export function getById(id) {
  let promise = new Promise((resolve, reject) => {
    request
      .get(`${api}/requests/${id}`)
      .end((err, res) => {
        if (err) {
          return reject(res.body);
        }

        return resolve(res.body);
      });
  });

  return promise;
}

export function getMultiple(options) {
  let promise = new Promise((resolve, reject) => {
    request
      .get(`${api}/requests`)
      .query(options)
      .end((err, res) => {
        if (err) {
          return reject(res.body);
        }

        return resolve(res.body);
      });
  });

  return promise;
}
