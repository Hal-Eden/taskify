import { createRouter, createWebHistory } from "vue-router";
import PageDashboard from "../pages/PageDashboard.vue";
import PageLogin from "../pages/PageLogin.vue";
import PageRegister from "../pages/PageRegister.vue";
import PageTasks from "../pages/PageTasks.vue";
import PageTask from "../pages/PageTask.vue";
import PageUsers from "../pages/PageUsers.vue";
import PageUser from "../pages/PageUser.vue";
import store from "../store/index.js";
import PageTaskCreate from "../pages/PageTaskCreate.vue";
import PageUserCreate from "../pages/PageUserCreate.vue";
import PageUserEdit from "../pages/PageUserEdit.vue";
import PageTaskEdit from "../pages/PageTaskEdit.vue";
import NotFound from "../pages/NotFound.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "dashboard",
            component: PageDashboard,
            meta: { requiresAuth: true },
        },
        {
            path: "/login",
            name: "login",
            component: PageLogin,
            meta: { guest: true },
        },
        {
            path: "/register",
            name: "register",
            component: PageRegister,
            meta: { guest: true },
        },
        {
            path: "/tasks",
            name: "tasks",
            component: PageTasks,
            meta: { requiresAuth: true },
        },
        {
            path: "/tasks/:taskId",
            name: "task",
            component: PageTask,
            meta: { requiresAuth: true },
        },
        {
            path: "/users",
            name: "users",
            component: PageUsers,
            meta: { requiresAuth: true, requiresAdmin: true },
        },
        {
            path: "/users/create",
            name: "user-create",
            component: PageUserCreate,
            meta: { requiresAuth: true, requiresAdmin: true },
        },
        {
            path: "/users/:userId",
            name: "user",
            component: PageUser,
            meta: { requiresAuth: true, requiresAdmin: true },
        },
        {
            path: "/users/:userId/edit",
            name: "user-edit",
            component: PageUserEdit,
            meta: { requiresAuth: true, requiresAdmin: true },
        },
        {
            path: "/users/:userId/tasks",
            name: "user-tasks",
            component: PageTasks,
            meta: { requiresAuth: true, requiresAdmin: true },
        },
        {
            path: "/users/:userId/tasks/create",
            name: "task-create-user",
            component: PageTaskCreate,
            meta: { requiresAuth: true, requiresAdmin: true },
        },
        {
            path: "/tasks/create",
            name: "task-create",
            component: PageTaskCreate,
            meta: { requiresAuth: true },
        },
        {
            path: "/tasks/:taskId/edit",
            name: "task-edit",
            component: PageTaskEdit,
            meta: { requiresAuth: true },
        },
        {
            path: "/404",
            name: "not-found",
            component: NotFound,
        },
        {
            path: "/:catchAll(.*)",
            redirect: { name: "not-found" },
        },
    ],
});

router.beforeEach(function (to, _, next) {
    const isAuthenticated = store.getters["auth/isAuthenticated"];
    const isAdmin = store.getters["auth/isAdmin"];

    if (to.meta.requiresAuth && !isAuthenticated) {
        next({ name: "login" });
    } else if (to.meta.guest && isAuthenticated) {
        next({ name: "dashboard" });
    } else if (to.meta.requiresAdmin && !isAdmin) {
        next({ name: "not-found" });
    } else {
        next();
    }
});

export default router;
