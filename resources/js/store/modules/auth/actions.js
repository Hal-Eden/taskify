import axios from "axios";
import { handleErrors } from "../../../utils/globals";

export default {
    async register(context, payload) {
        try {
            context.commit("setIsButtonLoading", true, { root: true });

            await axios.get("/sanctum/csrf-cookie");

            const response = await axios.post("/api/register", {
                ...payload.data,
            });

            context.commit("setToken", response.data.token);
            context.commit("setAuthenticated", true);

            await context.dispatch("attempt");

            return response.data;
        } catch (error) {
            return handleErrors(error);
        } finally {
            context.commit("setIsButtonLoading", false, { root: true });
        }
    },
    async login(context, payload) {
        try {
            context.commit("setIsButtonLoading", true, { root: true });

            await axios.get("/sanctum/csrf-cookie");

            const response = await axios.post("/api/login", {
                ...payload.data,
            });

            context.commit("setToken", response.data.token);
            context.commit("setAuthenticated", true);
            await context.dispatch("attempt");

            return response.data;
        } catch (error) {
            return handleErrors(error);
        } finally {
            context.commit("setIsButtonLoading", false, { root: true });
        }
    },
    async logout(context) {
        try {
            context.commit("setIsLoading", true, { root: true });

            await axios.get("/sanctum/csrf-cookie");

            await axios.post("/api/logout");

            context.commit("setToken", "");
            context.commit("setAuthenticated", false);
            context.commit("setUser", {});
        } catch (error) {
            return handleErrors(error);
        } finally {
            context.commit("setIsLoading", false, { root: true });
        }
    },
    async attempt(context) {
        try {
            context.commit("setIsLoading", true, { root: true });

            const response = await axios.get("/api/user");

            context.commit("setAuthenticated", true);
            context.commit("setUser", response.data);
        } catch (error) {
            console.log(error);
            context.commit("setAuthenticated", false);
            context.commit("setUser", {});
        } finally {
            context.commit("setIsLoading", false, { root: true });
        }
    },
};
