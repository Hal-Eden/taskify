<template>
    <form-group :button-label="buttonLabel" :inputs="inputs" @confirm-form="formHandler"
        @updateInputs="inputsHandler"></form-group>
</template>

<script>
import FormGroup from '../groups/FormGroup.vue';
import { mapActions, mapGetters } from 'vuex';

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
    watch: {
        user() {
            const newInputs = JSON.parse(JSON.stringify(this.inputs));

            newInputs.map(input => {
                input.value = this.user[input.name] || '';

                return input;
            })

            this.inputs = newInputs;
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

            await this.update({ data, userId }).then((data) => {
                console.log(data)
                this.$router.push({ name: 'users' });
            });

        }
    }
}
</script>