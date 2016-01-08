import co from 'co';
import * as searchHttp from '../http-fetchers/search';


export function fetchCoursesSearch(phrase) {
  return co(function *() {
    console.log('coo');
    let result = yield searchHttp.fetchSearch(phrase, 'courses');

    return result;
  });
}

