<template>
    <base-header>Tasks List</base-header>
    <tasks-table @refresh-data="fetchTasks" :items="tasks"></tasks-table>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TasksTable from '../components/modules/TasksTable.vue';

export default {
    components: { TasksTable },
    mounted() {
        this.fetchTasks();
    },
    computed: {
        ...mapGetters('tasks', ['tasks']),
        ...mapGetters('auth', ['authUser', 'isAdmin'])
    },
    methods: {
        ...mapActions('tasks', ['getTasks', 'clearTasks']),
        fetchTasks() {
            const userId = this.isAdmin ? this.$route.params.userId : this.authUser.id;

            this.getTasks({ user_id: userId });
        }
    },
    beforeUnmount() {
        this.clearTasks();
    },
}
</script>