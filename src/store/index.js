import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userName: JSON.parse(window.localStorage.getItem("userName")) || null,
  },
  mutations: {
    setUserName(state, name) {
      state.userName = name;
      window.localStorage.setItem("userName", JSON.stringify(name));
    },
    clearUser(state) {
      state.userName = null;
      window.localStorage.removeItem("userName");
    },
  },
  actions: {
    saveUserName({ commit }, name) {
      commit("setUserName", name);
    },
    clearUser({ commit }) {
      commit("clearUser");
    },
  },
  getters: {
    userName: (state) => state.userName,
  },
});
