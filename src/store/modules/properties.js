import properties from '../../data/properties';

const state = {
  properties: []
};

const mutations = {
  'FETCH_PROPERTIES' (state, properties) {
    state.properties = properties;
  }
};

const actions = {
  fetchProperties: ({commit}) => {
    commit('FETCH_PROPERTIES', properties);
  },
};

const getters = {
  properties: state => {
    return state.properties;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};