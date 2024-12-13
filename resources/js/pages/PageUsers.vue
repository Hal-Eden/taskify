<template>
    <base-header>Users List</base-header>
    <users-table :items="users"></users-table>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import UsersTable from '../components/modules/UsersTable.vue';

export default {
    components: { UsersTable },
    data: () => ({}),
    mounted() {
        this.getUsers();
    },
    computed: {
        ...mapGetters('users', ['users']),
    },
    methods: {
        ...mapActions('users', ['getUsers', 'clearUsers'])
    },
    beforeUnmount() {
        this.clearUsers();
    },
}
</script>