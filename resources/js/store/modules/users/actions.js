import { handleErrors } from "../../../utils/globals";

export default {
  async getUsers(context, payload = {}) {
    try {
      context.commit('setIsLoading', true, { root: true });

      const response = await axios.get('/api/users', { params: { term: payload.term } });

      context.commit('setUsers', response.data);
    } catch (error) {
      return handleErrors(error);
    } finally {
      context.commit('setIsLoading', false, { root: true });
    }
  },
  async getUser(context, payload) {
    try {
      context.commit('setIsLoading', true, { root: true });

      const response = await axios.get(`/api/users/${payload.userId}`);

      context.commit('setUser', response.data);
    } catch (error) {
      return handleErrors(error);
    } finally {
      context.commit('setIsLoading', false, { root: true });
    }
  },
  async create(context, payload) {
    try {
      context.commit('setIsButtonLoading', true, { root: true });

      await axios.get('/sanctum/csrf-cookie');

      await axios.post('/api/users', {
        ...payload.data
      });
    } catch (error) {
      return handleErrors(error);
    } finally {
      context.commit('setIsButtonLoading', false, { root: true });
    }
  },
  async update(context, payload) {
    try {
      context.commit('setIsButtonLoading', true, { root: true });

      await axios.get('/sanctum/csrf-cookie');

      const response = await axios.put(`/api/users/${payload.userId}`, {
        ...payload.data
      });

      return response.data;
    } catch (error) {
      return handleErrors(error);
    } finally {
      context.commit('setIsButtonLoading', false, { root: true });
    }
  },
  async delete(context, payload = {}) {
    try {
      context.commit('setIsButtonLoading', true, { root: true });

      await axios.get('/sanctum/csrf-cookie');

      const response = await axios.delete(`/api/users/${payload.userId}`);

      context.commit('setUser', {});
    } catch (error) {
      return handleErrors(error);
    } finally {
      context.commit('setIsButtonLoading', false, { root: true });
    }
  },
  clearUsers(context) {
    context.commit('setUsers', []);
    context.commit('setUser', {});
  },
};