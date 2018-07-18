import {HTTP} from '../http-common';
import {FETCH_PROPERTIES} from '../actionTypes';

const state = {
  properties: []
};

const mutations = {
  FETCH_PROPERTIES (state, properties) {
    state.properties = properties.data;
  }
};

const actions = {
  loadData: ({commit}) => {
    HTTP.get('properties')
      .then(response => {
        if(response.data.errors && response.data.errors[0].title === 'Unauthorized') {
          window.location.replace('http://demo.seekom.com/oauth/auth?client_id=2b8f492621924e27&response_type=code&redirect_uri=http://devhost1.com/testCallbackURL&state=http://localhost:8080/testCallBackUrl');
        }
        commit(FETCH_PROPERTIES, response.data);
      })
      .catch(error => console.log(error))
  }
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