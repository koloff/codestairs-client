export default function(router) {
  router.map({
    '/': {
      component: require('./components/home/Home.vue')
    },
    '/add-resource': {
      component: require('./components/add/AddResource.vue')
    },
    '/add-course': {
      component: require('./components/add/AddCourse.vue')
    }
  })
}