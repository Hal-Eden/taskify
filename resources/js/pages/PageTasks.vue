<template>
    <base-header>{{ $t('pages.tasks_list') }}</base-header>
    <div class="filters-wrapper">
        <base-search :term="term" :loading="isLoading" v-if="mounted" :placeholder="$t('pages.search_tasks')"
            @handle-search="searchHandler"></base-search>
        <checkbox-list @update-values="updateStatuses" v-if="mounted" :items="statuses"
            :selected-values="selectedStatuses"></checkbox-list>
    </div>
    <loading-wrapper :is-loaded="mounted">
        <tasks-table v-if="tasks.length" @refresh-data="fetchTasks" :items="tasks"></tasks-table>
        <base-alert v-else :title="$t('pages.no_tasks_title')">{{ $t('pages.check_later') }}</base-alert>
    </loading-wrapper>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TasksTable from '../components/modules/TasksTable.vue';
import BaseSearch from '../components/elements/BaseSearch.vue';
import BaseAlert from '../components/elements/BaseAlert.vue';
import CheckboxList from '../components/groups/CheckboxList.vue';

export default {
    components: { TasksTable, BaseSearch, BaseAlert, CheckboxList },
    data() {
        return {
            mounted: false,
            term: '',
            statuses: [
                {
                    value: 'pending',
                    label: 'P',
                    selected: false,
                    color: 'blue',
                },
                {
                    value: 'completed',
                    label: 'C',
                    selected: false,
                    color: 'green',
                },
                {
                    value: 'stale',
                    label: 'S',
                    selected: false,
                    color: 'red',
                }
            ],
            selectedStatuses: []
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
        async fetchTasks() {
            const userId = this.isAdmin ? this.$route.params.userId : this.authUser.id;

            await this.getTasks({ user_id: userId, term: this.term, statuses: this.selectedStatuses });
        },
        searchHandler(e) {
            this.term = e.target.value;
        },
        cleanFilters() {
            this.term = '';
            this.selectedStatuses = [];
        },
        updateStatuses(values) {
            this.selectedStatuses = JSON.parse(JSON.stringify(values));
        }
    },
    watch: {
        async '$route'() {
            this.mounted = false;
            this.cleanFilters();

            await this.fetchTasks();

            this.mounted = true;
        },
        async term() {
            await this.fetchTasks();
        },
        async selectedStatuses() {
            await this.fetchTasks();
        }
    },
    beforeUnmount() {
        this.clearTasks();
    },
}
</script>

<style scoped>
.filters-wrapper {
    @apply flex
}
</style>