import co from 'co';
import * as searchHttp from '../utils/search-http';

let state = {
  resourcesSearch: []
};

export function getResourcesSearch() {
  return state.resourcesSearch;
}

export function fetchResourcesSearch(phrase) {
  return co(function *() {
    console.log('coo');
    let result = yield searchHttp.fetchSearch(phrase, 'resources');
    if (result) {
      state.resourcesSearch = result;
    }

    return result;
  });
}

