import { createStore } from 'vuex';

import tasksModule from './modules/tasks/index.js';
import usersModule from './modules/users/index.js';
import authModule from './modules/auth/index.js';

const store = createStore({
  modules: {
    tasks: tasksModule,
    users: usersModule,
    auth: authModule,
  },
  state() {
    return {
      modalIsOpen: false,
      modalParams: {},
    };
  },
  getters: {
    modalIsOpen(state) {
      return state.modalIsOpen;
    },
    modalParams(state) {
      return state.modalParams;
    },
  },
  mutations: {
    setModalIsOpen(state, payload) {
      console.log('set', payload)
      state.modalIsOpen = payload;
    },
    setModalParams(state, payload) {
      state.modalParams = payload;
    },
  },
  actions: {
    toggleModal(context, payload) {
      console.log('toggle')
      context.commit('setModalIsOpen', payload);
    },
    updateModalParams(context, payload) {
      context.commit('updateModalParams', payload);
    },
  }
});

export default store;