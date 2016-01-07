// load semantic ui's js
import './static/semantic-ui/semantic';

// load custom css
import './style/style.css';

import Vue from 'vue';
import VueRouter from 'vue-router';
import configRouter from './router-config';

// todo - remove at deploy
// config Vue
Vue.config.debug = true;


// bootstrap filters
import './filters/domain';
import './filters/date';

// install router
Vue.use(VueRouter);

// create router
const router = new VueRouter({
  history: true,
  saveScrollPosition: true
});

// configure router
configRouter(router);

// boostrap the app
import App from './components/App.vue';
router.start(App, '#root');