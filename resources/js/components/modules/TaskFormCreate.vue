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
    data() {
        return {
            inputs: [
                {
                    value: '',
                    name: 'title',
                    type: 'text',
                    label: 'Title',
                    placeholder: 'Task title',
                    error: [],
                },
                {
                    value: 'pending',
                    name: 'status',
                    type: 'select',
                    label: 'Status',
                    placeholder: 'Task Status',
                    error: [],
                    options: [
                        {
                            value: 'pending',
                            label: 'Pending',
                        },
                        {
                            value: 'completed',
                            label: 'Completed',
                        },
                        {
                            value: 'stale',
                            label: 'Stale',
                        }
                    ]
                },
                {
                    value: '',
                    name: 'due_date',
                    type: 'date',
                    label: 'Due date',
                    error: [],
                }
            ],
            buttonLabel: 'CREATE'
        }
    },
    computed: {
        ...mapGetters('auth', ['isAdmin', 'authUser']),
    },
    methods: {
        ...mapActions('tasks', ['create']),
        inputsHandler(inputs) {
            this.inputs = inputs;
        },
        async formHandler(data) {
            const routeUserId = this.$route.params.userId;
            const userId = this.isAdmin && routeUserId ? routeUserId : this.authUser.id;
            
            data.user_id = userId;

            const task = await this.create({ data });

            if (task.errors) {
                this.inputs = updateKeys(this.inputs, task.errors, 'error', []);
                return;
            }

            this.$router.push({ name: 'task', params: { taskId: task.id } });
        }
    }
}
</script>