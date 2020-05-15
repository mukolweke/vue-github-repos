import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accessToken: '',
    userData: {},
  },

  getters: {
    getAccessToken: (state) => state.accessToken,

    getUserData: (state) => state.userData,
  },

  mutations: {
    SAVE_ACCESS_TOKEN(state, token) {
      state.accessToken = token;
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
