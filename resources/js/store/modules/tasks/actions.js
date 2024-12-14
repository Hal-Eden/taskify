import { handleErrors } from "../../../utils/globals";

export default {
  async getTasks(context, payload = {}) {
    try {
      context.commit('setIsLoading', true, { root: true });

      const response = await axios.get('/api/tasks', { params: { ...payload } });

      context.commit('setTasks', response.data);
    } catch (error) {
      return handleErrors(error);
    } finally {
      context.commit('setIsLoading', false, { root: true });
    }
  },
  async getTask(context, payload) {
    try {
      context.commit('setIsLoading', true, { root: true });

      const response = await axios.get(`/api/tasks/${payload.taskId}`);

      context.commit('setTask', response.data);
    } catch (error) {
      return handleErrors(error);
    } finally {
      context.commit('setIsLoading', false, { root: true });
    }
  },
  async create(context, payload) {
    const user = context.rootGetters['auth/authUser'];
    var userId = user.is_admin ? 1 : user.id;

    if (!user.is_admin) {
      userId = user.id;
    }

    try {
      context.commit('setIsButtonLoading', true, { root: true });

      await axios.get('/sanctum/csrf-cookie');

      const response = await axios.post('/api/tasks', {
        ...payload.data,
      })

      return response.data;
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

      const response = await axios.put(`/api/tasks/${payload.taskId}`, {
        ...payload.data
      });

      return response.data;
    } catch (error) {
      return handleErrors(error);
    } finally {
      context.commit('setIsButtonLoading', false, { root: true });
    }
  },
  async delete(context, payload) {
    try {
      context.commit('setIsButtonLoading', true, { root: true });

      await axios.get('/sanctum/csrf-cookie');

      await axios.delete(`/api/tasks/${payload.taskId}`);

      context.commit('setTask', {});
    } catch (error) {
      return handleErrors(error);
    } finally {
      context.commit('setIsButtonLoading', false, { root: true });
    }
  },
  clearTasks(context) {
    context.commit('setTasks', []);
    context.commit('setTask', {});
  },
};
