import request from 'superagent';

import {api} from './../config';

// todo update course will be on /courses/:courseId with put


export function addCourse(course) {

  let promise = new Promise((resolve, reject) => {
    request
      .post(`${api}/courses`)
      .send(course)
      .end((err, res) => {
        if (err) {
          return reject(res.body);
        }

        return resolve(res.body);
      });
  });

  return promise;
}
