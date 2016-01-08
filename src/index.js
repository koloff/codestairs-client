// load semantic ui's js
import './static/semantic-ui/semantic';

// load custom css
import './style/style.css';



import Vue from 'vue';
import VueRouter from 'vue-router';
import VueValidator from 'vue-validator';
import * as localStorage from './utils/local-storage';
import * as identity from './store/identity';
import configRouter from './router-config';
import validators from './validators/validators';
import App from './components/App.vue';
import './utils/object-pure';




// load identity
if (localStorage.getObject('token')) {
  identity.setToken(localStorage.getObject('token'));
}
if (localStorage.getObject('profile')) {
  identity.setProfile(localStorage.getObject('profile'));
}


// todo - remove at deploy
// config Vue
Vue.config.debug = true;

// bootstrap validators
Vue.use(VueValidator);
validators(Vue);


// bootstrap filters
import './filters/domain';
import './filters/date';

// bootstrap directives
import dropdown from './directives/dropdown-semantic';
dropdown(Vue);

// install router
Vue.use(VueRouter);

// create router
const router = new VueRouter({
  history: true,
  mode: 'html5',
  saveScrollPosition: true
});

// configure router
configRouter(router);

// boostrap the app
router.start(App, '#root');


