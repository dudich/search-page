import propertyPhotos from '../../mockData/propertyPhotos';
import {FETCH_PROPERTY_PHOTOS} from '../actionTypes';

const state = {
  propertyPhotos: []
};

const mutations = {
  FETCH_PROPERTY_PHOTOS (state, propertyPhotos) {
    state.propertyPhotos = propertyPhotos;
  }
};

const actions = {
  fetchPropertyPhotos: ({commit}) => {
    commit(FETCH_PROPERTY_PHOTOS, propertyPhotos);
  },
};

const getters = {
  propertyPhotos: state => {
    return state.propertyPhotos;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};