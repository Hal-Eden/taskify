<template>
    <form-group :button-label="$t(buttonLabel)" :inputs="inputs" @confirm-form="formHandler"
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
                    label: 'users.name_label',
                    placeholder: 'users.name_placeholder',
                    error: [],
                },
                {
                    value: '',
                    name: 'password',
                    type: 'password',
                    label: 'users.password_label',
                    placeholder: 'users.password_placeholder',
                    error: [],
                }
            ],
            buttonLabel: 'users.login'
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