import propertyReviews from '../../data/propertyReviews';

const state = {
  propertyReviews: []
};

const mutations = {
  'FETCH_PROPERTY_REVIEWS' (state, propertyReviews) {
    state.propertyReviews = propertyReviews;
  }
};

const actions = {
  fetchPropertyReviews: ({commit}) => {
    commit('FETCH_PROPERTY_REVIEWS', propertyReviews);
  },
};

const getters = {
  propertyReviews: state => {
    return state.propertyReviews;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};