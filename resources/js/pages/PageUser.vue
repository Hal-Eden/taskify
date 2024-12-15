<template>
    <div>
        <base-header>{{ $t('pages.user') }}</base-header>
        <loading-wrapper>
            <user-info-card :user="user"></user-info-card>
        </loading-wrapper>
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
    },
    beforeUnmount() {
        this.clearUsers();
    }
}
</script>