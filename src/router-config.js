export default function(router) {
  router.map({
    '/:view': {
      component: require('./components/home/Home.vue')
    },
    '/add-resource': {
      component: require('./components/add/AddResource.vue')
    },
    '/add-course': {
      component: require('./components/add/AddCourse.vue')
    }
  });

  router.redirect({
    '/': '/resources'
  });
}