import propertyDeals from '../../mockData/propertyDeals';
import {FETCH_PROPERTY_DEALS} from '../actionTypes';

const state = {
  propertyDeals: []
};

const mutations = {
  FETCH_PROPERTY_DEALS (state, propertyDeals) {
    state.propertyDeals = propertyDeals;
  }
};

const actions = {
  fetchPropertyDeals: ({commit}) => {
    commit(FETCH_PROPERTY_DEALS, propertyDeals);
  },
};

const getters = {
  propertyDeals: state => {
    return state.propertyDeals;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};