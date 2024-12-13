export default {
  async create(context, payload) {
    const user = context.rootGetters['auth/authUser'];
    var userId = user.is_admin ? 1 : user.id;

    if (!user.is_admin) {
      userId = user.id;
    }

    try {
      await axios.get('/sanctum/csrf-cookie');

      const response = await axios.post('/api/tasks', {
        ...payload.data,
      })

      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  async getTasks(context, payload = {}) {
    try {
      console.log(payload)
      const response = await axios.get('/api/tasks', { params: { user_id: payload.user_id } });

      context.commit('setTasks', response.data);
    } catch (error) {
      console.log(error)
      throw error;
    }
  },
  async getTask(context, payload) {
    try {
      const response = await axios.get(`/api/tasks/${payload.taskId}`);

      context.commit('setTask', response.data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  clearTasks(context) {
    context.commit('setTasks', []);
  },
  async update(context, payload) {
    try {
      await axios.get('/sanctum/csrf-cookie');

      const response = await axios.put(`/api/tasks/${payload.taskId}`, {
        ...payload.data
      });

      console.log(response, 'response')

      return response.data;
    } catch(error) {
      console.log(error);
      throw error;
    }
  },
  async delete(context, payload) {
    try {
      await axios.get('/sanctum/csrf-cookie');

      const response = await axios.delete(`/api/tasks/${payload.taskId}`);

      context.commit('setTask', {});
    } catch (error) {
      console.log(error)
      throw error;
    }
  },
};
