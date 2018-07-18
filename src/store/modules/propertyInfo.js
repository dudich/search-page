import propertyInfo from '../../mockData/propertyInfo';
import {FETCH_PROPERTY_INFO} from '../actionTypes';

const state = {
  propertyInfo: {}
};

const mutations = {
  FETCH_PROPERTY_INFO (state, propertyInfo) {
    state.propertyInfo = propertyInfo;
  }
};

const actions = {
  fetchPropertyInfo: ({commit}) => {
    commit(FETCH_PROPERTY_INFO, propertyInfo);
  },
};

const getters = {
  propertyInfo: state => {
    return state.propertyInfo;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};