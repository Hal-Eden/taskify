<template>
    <base-form @form-action="submitForm">
        <base-input @input-action="updateInput" :value="email" name="email" type="text" label="Email"
            placeholder="Your email"></base-input>
        <base-input @input-action="updateInput" :value="password" name="password" type="password" label="Password"
            placeholder="Your password"></base-input>
        <base-button type="submit">LOGIN</base-button>
    </base-form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        ...mapActions('auth', ['login']),
        updateInput(e, name) {
            this[name] = e.target.value;
        },
        async submitForm() {
            await this.login({ email: this.email, password: this.password });
            
            this.$router.push({ name: 'dashboard' });
        }
    }
}
</script>