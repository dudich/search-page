import propertyDeals from '../../data/propertyDeals';

const state = {
  propertyDeals: []
};

const mutations = {
  'FETCH_PROPERTY_DEALS' (state, propertyDeals) {
    state.propertyDeals = propertyDeals;
  }
};

const actions = {
  fetchPropertyDeals: ({commit}) => {
    commit('FETCH_PROPERTY_DEALS', propertyDeals);
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