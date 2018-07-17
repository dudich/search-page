import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import properties from './modules/properties';
import propertyPhotos from './modules/propertyPhotos';

export default new Vuex.Store({
  modules: {
    properties,
    propertyPhotos
  }
});