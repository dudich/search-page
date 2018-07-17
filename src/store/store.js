import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import properties from './modules/properties';
import propertyPhotos from './modules/propertyPhotos';
import propertyInfo from './modules/propertyInfo';
import propertyDeals from './modules/propertyDeals';
import propertyReviews from './modules/propertyReviews';

export default new Vuex.Store({
  modules: {
    properties,
    propertyPhotos,
    propertyInfo,
    propertyDeals,
    propertyReviews
  }
});