<template>
    <base-header>{{ $t('pages.login') }}</base-header>
    <login-form></login-form>
</template>

<script>
import LoginForm from '../components/groups/LoginForm.vue';

export default {
    components: { LoginForm },
    data: () => ({}),
}
</script>