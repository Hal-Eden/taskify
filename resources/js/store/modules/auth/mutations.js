export default {
    setUser(state, payload) {
        state.authUser = payload;
    },
    setToken(state, payload) {
        state.token = payload;
    },
    setAuthenticated(state, payload) {
        state.isAuthenticated = payload;
    },
};
