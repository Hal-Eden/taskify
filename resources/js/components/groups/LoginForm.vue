<template>
    <form-group :button-label="buttonLabel" :inputs="inputs" @confirm-form="formHandler"
        @updateInputs="inputsHandler"></form-group>
</template>

<script>
import FormGroup from '../groups/FormGroup.vue';
import { mapActions } from 'vuex';
import { updateKeys } from '../../utils/globals';

export default {
    components: { FormGroup },
    data() {
        return {
            inputs: [
                {
                    value: '',
                    name: 'email',
                    type: 'email',
                    label: 'Email',
                    placeholder: 'User email',
                    error: [],
                },
                {
                    value: '',
                    name: 'password',
                    type: 'password',
                    label: 'Password',
                    placeholder: 'User password',
                    error: [],
                }
            ],
            buttonLabel: 'LOGIN'
        }
    },
    methods: {
        ...mapActions('auth', ['login']),
        inputsHandler(inputs) {
            this.inputs = inputs;
        },
        async formHandler(data) {
            const user = await this.login({ data });

            if (user.errors) {
                this.inputs = updateKeys(this.inputs, user.errors, 'error', []);
                return;
            }

            this.$router.push({ name: 'dashboard' });
        }
    }
}
</script>