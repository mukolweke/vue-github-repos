import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: {},
  },

  getters: {
    getUserData: (state) => state.userData,
  },

  mutations: {
    SAVE_USER_DATA(state, userData) {
      state.userData = userData;
    },
  },

  actions: {},

  modules: {},
});
