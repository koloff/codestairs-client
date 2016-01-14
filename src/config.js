let api, staticFilesUrl, resourcesScreenshotsUrl;


if (process.env.NODE_ENV !== 'production') {
  console.log('process.env.NODE_ENV !== production');
  api = 'http://api.codestairs.dev:3377';
  staticFilesUrl = 'http://codestairs.dev:3377/static';
  resourcesScreenshotsUrl = 'http://codestairs.dev:3377/generated/screenshots';
} else {
  console.log('process.env.NODE_ENV === production');
  api = 'http://api.codestairs.com';
  staticFilesUrl = 'http://codestairs.com/static';
  resourcesScreenshotsUrl = 'http://codestairs.com/generated/screenshots';
}

export {api as api};
export  {staticFilesUrl as staticFilesUrl};
export {resourcesScreenshotsUrl as resourcesScreenshotsUrl};