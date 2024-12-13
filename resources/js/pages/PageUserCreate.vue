<template>
    <div>
        <base-header>Create User</base-header>
        <user-form-create></user-form-create>
    </div>
</template>

<script>
import UserFormCreate from '../components/modules/UserFormCreate.vue';

export default {
    components: { UserFormCreate },
}
</script>