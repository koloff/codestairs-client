import co from 'co';
import * as searchHttp from '../utils/search-http';


export function fetchCoursesSearch(phrase) {
  return co(function *() {
    console.log('coo');
    let result = yield searchHttp.fetchSearch(phrase, 'courses');

    return result;
  });
}

