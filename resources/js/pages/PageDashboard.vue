<template>
    <div>
        <base-header>Statistics</base-header>
        <div class="block">
            <base-card class="inline-block">
                <h2 class="pt-2 mb-4 text-center text-2xl font-bold dark:text-white uppercase">Tasks</h2>
                <div class="grid grid-cols-2 gap-6">
                    <base-label color="gray" :stat="statuses.total" label="Total"></base-label>
                    <base-label color="blue" :stat="statuses.pending" label="Pending"></base-label>
                    <base-label color="green" :stat="statuses.completed" label="Completed"></base-label>
                    <base-label color="red" :stat="statuses.stale" label="Stale"></base-label>
                </div>
            </base-card>
            <base-card class="inline-block" v-if="isAdmin">
                <base-label :stat="users.length" label="Users"></base-label>
            </base-card>
        </div>
    </div>
</template>

<script>
import BaseLabel from '../components/elements/BaseLabel.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    components: { BaseLabel },
    data: () => ({
        defaultStatuses: {
            total: 0,
            completed: 0,
            stale: 0,
            pending: 0,
        }
    }),
    mounted() {
        if (this.isAdmin) {
            this.getUsers();
            this.getTasks();
        } else {
            this.getTasks({ user_id: this.authUser.id });
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
        ...mapActions('users', ['getUsers']),
    },
    beforeUnmount() {
        this.clearTasks();
    }
}
</script>