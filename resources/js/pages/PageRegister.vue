<template>
    <div>
        <base-header>{{ $t('pages.register') }}</base-header>
        <register-form></register-form>
    </div>
</template>

<script>
import RegisterForm from '../components/modules/UserFormRegister.vue';

export default {
    components: { RegisterForm },
    data: () => ({}),
}
</script>