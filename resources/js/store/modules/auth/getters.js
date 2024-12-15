export default {
    authUser(state) {
        return state.authUser;
    },
    token(state) {
        return state.token;
    },
    isAdmin(state) {
        return state.authUser && state.authUser.is_admin;
    },
    isAuthenticated(state) {
        return state.isAuthenticated;
    },
};
