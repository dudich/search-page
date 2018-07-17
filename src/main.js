// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from  './store/store'

Vue.config.productionTip = false;

const EventBus = new Vue();
window.EventBus = EventBus;

new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
});
