export default {
  async getUsers(context) {
    try {
      const response = await axios.get('/api/users');

      context.commit('setUsers', response.data);
    } catch(error) {
      console.log(error)
      throw error;
    }
  },
  async getUser(context, payload) {
    try {
      const response = await axios.get(`/api/users/${payload.userId}`);

      context.commit('setUser', response.data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  async delete(context, payload = {}) {
    try {
      await axios.get('/sanctum/csrf-cookie');

      const response = await axios.delete(`/api/users/${payload.userId}`);

      context.commit('setUser', {});
    } catch (error) {
      console.log(error)
      throw error;
    }
  },
  clearUsers(context) {
    context.commit('setUsers', []);
    context.commit('setUser', {});
  },
  async create(context, payload) {
    try {
      await axios.get('/sanctum/csrf-cookie');

      const response = await axios.post('/api/users', {
        ...payload.data
      });
    } catch (error) {
      console.log(error)
      throw error;
    }
  },
  async update(context, payload) {
    try {
      await axios.get('/sanctum/csrf-cookie');

      const response = await axios.put(`/api/users/${payload.userId}`, {
        ...payload.data
      });

      console.log(response, 'response')
    } catch(error) {
      console.log(error);
      throw error;
    }
  },
};