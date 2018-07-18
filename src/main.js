import Vue from 'vue';
import App from './App';
import store from  './store/store';
import VueRouter from 'vue-router';
import { routes } from './routes';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const EventBus = new Vue();
window.EventBus = EventBus;

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
