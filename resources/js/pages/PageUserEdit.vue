<template>
    <div>
        <base-header>User Edit: {{ user.name }}</base-header>
        <user-form-edit></user-form-edit>
    </div>
</template>

<script>
import UserFormEdit from '../components/modules/UserFormEdit.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
    components: { UserFormEdit },
    mounted() {
        const userId = this.$route.params.userId;

        this.getUser({ userId });
    },
    computed: {
        ...mapGetters('users', ['user']),
    },
    methods: {
        ...mapActions('users', ['getUser', 'clearUsers'])
    }
}
</script>