import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gitAccessToken: '',
    userData: {},
  },

  getters: {
    getGitAccessToken: (state) => state.gitAccessToken,

    getUserData: (state) => state.userData,
  },

  mutations: {
    SAVE_ACCESS_TOKEN(state, token) {
      console.log('token', token);

      state.gitAccessToken = token;
    },

    SAVE_USER_DATA(state, userData) {
      console.log('userdata', userData);

      state.userData = userData;
    },
  },

  actions: {
    saveAccessToken(context, token) {
      context.commit('SAVE_ACCESS_TOKEN', token);
    },
  },

  modules: {

  },
});
