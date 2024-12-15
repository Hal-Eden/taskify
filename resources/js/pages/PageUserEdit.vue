<template>
    <div>
        <base-header>{{ $t('pages.edit_user') }}</base-header>
        <loading-wrapper>
            <user-form-edit></user-form-edit>
        </loading-wrapper>
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
    },
    beforeUnmount() {
        this.clearUsers();
    }
}
</script>