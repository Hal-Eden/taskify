<template>
    <div>
        <base-header>Register</base-header>
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