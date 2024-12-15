<template>
    <base-header>{{ $t('pages.users_list') }}</base-header>
    <base-search :term="term" :loading="isLoading" v-if="mounted" :placeholder="$t('pages.search_users')"
        @handle-search="searchHandler"></base-search>
    <loading-wrapper :is-loaded="mounted">
        <users-table v-if="users.length" @refresh-data="fetchUsers" :items="users"></users-table>
        <base-alert v-else :title="$t('pages.no_users_title')">{{ $t('pages.check_later') }}</base-alert>
    </loading-wrapper>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import UsersTable from '../components/modules/UsersTable.vue';
import BaseSearch from '../components/elements/BaseSearch.vue';
import BaseAlert from '../components/elements/BaseAlert.vue';

export default {
    components: { UsersTable, BaseSearch, BaseAlert },
    data() {
        return {
            mounted: false,
            term: '',
        }
    },
    async mounted() {
        await this.fetchUsers();
        this.mounted = true;
    },
    computed: {
        ...mapGetters('users', ['users']),
        ...mapGetters(['isLoading']),
    },
    methods: {
        ...mapActions('users', ['getUsers', 'clearUsers']),
        async fetchUsers(term = '') {
            this.term = term;

            await this.getUsers({ term });
        },
        async searchHandler(e) {
            await this.fetchUsers(e.target.value)
        }
    },
    beforeUnmount() {
        this.clearUsers();
    },
}
</script>