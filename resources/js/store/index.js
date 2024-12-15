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
      sidebarIsOpen: false,
      isLoading: false,
      isButtonLoading: false,
    };
  },
  getters: {
    modalIsOpen(state) {
      return state.modalIsOpen;
    },
    sidebarIsOpen(state) {
      return state.sidebarIsOpen;
    },
    isLoading(state) {
      return state.isLoading;
    },
    isButtonLoading(state) {
      return state.isButtonLoading;
    },
  },
  mutations: {
    setModalIsOpen(state, payload) {
      state.modalIsOpen = payload;
    },
    setSidebarIsOpen(state, payload) {
      state.sidebarIsOpen = payload;
    },
    setIsLoading(state, payload) {
      state.isLoading = payload;
    },
    setIsButtonLoading(state, payload) {
      return state.isButtonLoading = payload;
    },
  },
  actions: {
    toggleModal(context, payload) {
      context.commit('setModalIsOpen', payload);
    },
    toggleSidebar(context) {
      context.commit('setSidebarIsOpen', !context.getters.sidebarIsOpen);
    },
    setSidebarState(context, payload) {
      context.commit('setSidebarIsOpen', payload);
    },
    toggleLoading(context, payload) {
      context.commit('isLoading', payload);
    },
    toggleButtonLoading(context, payload) {
      context.commit('isButtonLoading', payload);
    },
  }
});

export default store;