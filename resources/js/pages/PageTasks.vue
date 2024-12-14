<template>
    <base-header>Tasks List</base-header>
    <base-search :term="term" :loading="isLoading" v-if="mounted" placeholder="Search task..." @handle-search="searchHandler"></base-search>
    <loading-wrapper :is-loaded="mounted">
        <tasks-table v-if="tasks.length" @refresh-data="fetchTasks" :items="tasks"></tasks-table>
        <base-alert v-else title="No tasks found!">Please check again later.</base-alert>
    </loading-wrapper>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TasksTable from '../components/modules/TasksTable.vue';
import BaseSearch from '../components/elements/BaseSearch.vue';
import BaseAlert from '../components/elements/BaseAlert.vue';

export default {
    components: { TasksTable, BaseSearch, BaseAlert },
    data() {
        return {
            mounted: false,
            term: '',
        }
    },
    async mounted() {
        await this.fetchTasks();
        this.mounted = true;
    },
    computed: {
        ...mapGetters('tasks', ['tasks']),
        ...mapGetters(['isLoading']),
        ...mapGetters('auth', ['authUser', 'isAdmin'])
    },
    methods: {
        ...mapActions('tasks', ['getTasks', 'clearTasks']),
        async fetchTasks(term = '') {
            this.term = term;
            const userId = this.isAdmin ? this.$route.params.userId : this.authUser.id;

            await this.getTasks({ user_id: userId, term });
        },
        async searchHandler(e) {
            await this.fetchTasks(e.target.value)
        }
    },
    beforeUnmount() {
        this.clearTasks();
    },
}
</script>