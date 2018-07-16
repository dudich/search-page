import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import properties from './modules/properties'

export default new Vuex.Store({
  modules: {
    properties
  }
});