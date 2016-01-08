import co from 'co';
import * as searchHttp from '../http-fetchers/search';

let state = {
  resourcesSearch: []
};

export function getResourcesSearch() {
  return state.resourcesSearch;
}

export function fetchResourcesSearch(phrase) {
  return co(function *() {
    let result = yield searchHttp.fetchSearch(phrase, 'resources');
    if (result) {
      state.resourcesSearch = result;
    }

    return result;
  });
}

