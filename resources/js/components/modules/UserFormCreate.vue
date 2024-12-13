<template>
    <form-group :button-label="buttonLabel" :inputs="inputs" @confirm-form="formHandler"
        @updateInputs="inputsHandler"></form-group>
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
            buttonLabel: 'CREATE'
        }
    },
    methods: {
        ...mapActions('users', ['create']),
        inputsHandler(inputs) {
            this.inputs = inputs;
        },
        async formHandler(data) {
            await this.create({ data });

            this.$router.push({ name: 'users' });
        }
    }
}
</script>