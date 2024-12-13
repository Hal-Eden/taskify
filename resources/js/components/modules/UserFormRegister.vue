<template>
    <user-form :button-label="buttonLabel" :inputs="inputs" @confirm-form="formHandler"
        @updateInputs="inputsHandler"></user-form>
</template>

<script>
import FormGroup from '../groups/FormGroup.vue';
import { mapActions } from 'vuex';

export default {
    components: { FormGroup },
    data() {
        return {
            inputs: [
                {
                    value: '',
                    name: 'name',
                    type: 'text',
                    label: 'Name',
                    placeholder: 'User name',
                    error: '',
                },
                {
                    value: '',
                    name: 'email',
                    type: 'email',
                    label: 'Email',
                    placeholder: 'User email',
                    error: '',
                },
                {
                    value: '',
                    name: 'password',
                    type: 'password',
                    label: 'Password',
                    placeholder: 'User password',
                    error: '',
                },
                {
                    value: '',
                    name: 'password_confirmation',
                    type: 'password',
                    label: 'Password Confirmation',
                    placeholder: 'Confirmed password',
                    error: '',
                },
            ],
            buttonLabel: 'UPDATE'
        }
    },
    methods: {
        ...mapActions('auth', ['register']),
        inputsHandler(inputs) {
            this.inputs = inputs;
        },
        async submitForm() {
            await this.register(values);
            
            this.$router.push({ name: 'dashboard' });
        }
    }
}
</script>