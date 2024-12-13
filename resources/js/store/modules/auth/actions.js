import axios from "axios";

export default {
  async register(context, payload) {
    await axios.get('/sanctum/csrf-cookie');

    await axios.post('/api/register', {
      email: payload.email,
      name: payload.name,
      password: payload.password,
      password_confirmation: payload.password_confirmation,
    }).then(data => {
      context.commit('setToken', data.data.token);
      context.commit('setAuthenticated', true);

      context.dispatch('attempt');

      context.rootState.$router.push('/');
    }).catch(error => {
      console.log(error)
    });
  },
  async login(context, payload) {
    await axios.get('/sanctum/csrf-cookie');

    await axios.post('/api/login', {
      email: payload.email,
      password: payload.password,
    }).then(data => {
      context.commit('setToken', data.data.token);
      context.commit('setAuthenticated', true);

      context.dispatch('attempt');
    }).catch(error => {
      console.log(error)
    });
  },
  async logout(context) {
    await axios.get('/sanctum/csrf-cookie');

    await axios.post('/api/logout').then(() => {
      context.commit('setToken', '');
      context.commit('setAuthenticated', false);
      context.commit('setUser', {});
    }).catch(error => {
      console.log(error)
    });
  },
  async attempt(context) {
    await axios.get('/api/user').then(data => {
      context.commit('setAuthenticated', true);
      context.commit('setUser', data.data);
    }).catch(error => {
      console.log(error)
      context.commit('setAuthenticated', false);
      context.commit('setUser', {});
    });
  }
};
