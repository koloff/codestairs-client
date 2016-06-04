import request from 'superagent';
import {api} from './../config';

// todo update course will be on /courses/:courseId


export function addPath(path) {

  let promise = new Promise((resolve, reject) => {
    request
      .post(`${api}/paths`)
      .send(path)
      .end((err, res) => {
        if (err) {
          return reject(res.body);
        }

        return resolve(res.body);
      });
  });

  return promise;
}

/**
 * gets path by the the id or the editing id
 * @param byWhat  _id or idEdited
 * @param identifier the value of the first param
 * @returns {Promise}
 */
export function getPath(byWhat, identifier) {

  let query;
  if (byWhat === 'id') {
    query = `paths/${identifier}`;
  } else if (byWhat === 'editId') {
    query = `paths/edit/${identifier}`;
  }


  let promise = new Promise((resolve, reject) => {
    request
      .get(`${api}/${query}`)
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
      .get(`${api}/paths`)
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
