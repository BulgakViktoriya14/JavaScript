import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    currentName: '',
    currentLogin: '',
    currentId: '',
    currentRole: ''
  },
  mutations: {
    setName(state, name) {
        state.currentName = name;
    },
    setId(state, id) {
      state.currentId = id;
    },
    setLogin(state, login) {
      state.currentLogin = login;
    },
    setRole(state, role) {
      state.currentRole = role;
    }
  },
  getters: {
    getLogin: (state) => state.currentLogin,
    getId: (state) => state.currentId,
    getRole: (state) => state.currentRole,
    getName: (state) => state.currentName
  }
})
