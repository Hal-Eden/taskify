<template>
    <div>
        <base-header>{{ $t('pages.statistics') }}</base-header>
        <loading-wrapper>
            <dashboard-stats :statuses="statuses" :users="users" :is-admin="!!isAdmin"></dashboard-stats>
        </loading-wrapper>
    </div>
</template>

<script>
import DashboardStats from '../components/modules/DashboardStats.vue';

import { mapActions, mapGetters } from 'vuex';

export default {
    components: { DashboardStats },
    data: () => ({
        defaultStatuses: {
            total: 0,
            completed: 0,
            stale: 0,
            pending: 0,
        }
    }),
    async mounted() {
        if (this.isAdmin) {
            await this.getUsers();
            await this.getTasks();
        } else {
            await this.getTasks({ user_id: this.authUser.id });
        }
    },
    computed: {
        ...mapGetters('auth', ['isAdmin', 'authUser']),
        ...mapGetters('tasks', ['tasks']),
        ...mapGetters('users', ['users']),
        statuses() {
            if (!this.tasks.length) {
                return { ...this.defaultStatuses }
            }

            const statuses = this.tasks.reduce(function (acc, curr) {
                if (acc[curr.status]) {
                    acc[curr.status]++;
                } else {
                    acc[curr.status] = 1;
                }
                return acc;
            }, { ...this.defaultStatuses });

            return {
                ...statuses,
                total: this.tasks.length,
            }
        }
    },
    methods: {
        ...mapActions('tasks', ['getTasks', 'clearTasks']),
        ...mapActions('users', ['getUsers', 'clearUsers']),
    },
    beforeUnmount() {
        this.clearTasks();
        this.clearUsers();
    }
}
</script>