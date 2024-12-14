<template>
    <form-group :button-label="buttonLabel" :inputs="inputs" @confirm-form="formHandler"
        @updateInputs="inputsHandler"></form-group>
</template>

<script>
import FormGroup from '../groups/FormGroup.vue';
import { mapActions, mapGetters } from 'vuex';
import { updateKeys } from '../../utils/globals';

export default {
    components: { FormGroup },
    mounted() {
        this.inputs = updateKeys(this.inputs, this.user, 'value');
    },
    data() {
        return {
            inputs: [
                {
                    value: '',
                    name: 'name',
                    type: 'text',
                    label: 'Name',
                    placeholder: 'User name',
                    error: [],
                },
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
                },
                {
                    value: '',
                    name: 'password_confirmation',
                    type: 'password',
                    label: 'Password Confirmation',
                    placeholder: 'Confirmed password',
                    error: [],
                },
            ],
            buttonLabel: 'UPDATE'
        }
    },
    computed: {
        ...mapGetters('users', ['user']),
    },
    methods: {
        ...mapActions('users', ['update']),
        inputsHandler(inputs) {
            this.inputs = inputs;
        },
        async formHandler(data) {
            const userId = this.$route.params.userId;

            if (!data.password) {
                delete data.password;
                delete data.password_confirmation;
            }

            const user = await this.update({ data, userId });

            if (user.errors) {
                this.inputs = updateKeys(this.inputs, user.errors, 'error', []);
                return;
            }

            this.$router.push({ name: 'users' });

        }
    },
}
</script>