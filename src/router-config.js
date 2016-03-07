export default function(router) {

  router.map({
    '/:view': {
      component: require('./components/home/Home.vue')
    },
    '/add-resource': {
      component: require('./components/add/AddResource.vue')
    },
    'new': {
      component: require('./components/new-path/NewPathPage.vue')
    },
    'paths': {
      component: require('./components/paths/PathsView.vue')
    },
    'requests': {
      component: require('./components/requests/RequestsPage.vue')
    },
    'requests/:requestId': {
      component: require('./components/requests/RequestDetails.vue')
    },
    '/add-course': {
      component: require('./components/add/AddCourse.vue')
    },
    '/authenticate': {
      component: require('./components/authenticate/AuthView.vue')
    },
    '/profile': {
      component: require('./components/profile/Profile.vue')
    },
    '/resource/:id': {
      component: require('./components/views-resources/ResourceDetails.vue')
    },
    '/about': {
      component: require('./components/info/About.vue')
    }
  });

  router.redirect({
    '/': '/resources'
  });
}