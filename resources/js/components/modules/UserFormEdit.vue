<template>
    <form-group :button-label="$t(buttonLabel)" :inputs="inputs" @confirm-form="formHandler"
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
                    label: 'users.name_label',
                    placeholder: 'users.name_placeholder',
                    error: [],
                },
                {
                    value: '',
                    name: 'email',
                    type: 'email',
                    label: 'users.email_label',
                    placeholder: 'users.email_placeholder',
                    error: [],
                },
                {
                    value: '',
                    name: 'password',
                    type: 'password',
                    label: 'users.password_label',
                    placeholder: 'users.password_placeholder',
                    error: [],
                },
                {
                    value: '',
                    name: 'password_confirmation',
                    type: 'password',
                    label: 'users.password_c_label',
                    placeholder: 'users.password_c_placeholder',
                    error: [],
                },
            ],
            buttonLabel: 'users.update'
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