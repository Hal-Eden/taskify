<template>
    <div>
        <base-header>User Details</base-header>
        <user-info-card :user="user"></user-info-card>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import UserInfoCard from '../components/modules/UserInfoCard.vue';

export default {
    components: { UserInfoCard },
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