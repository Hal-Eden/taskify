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
                    label: 'tasks.title_label',
                    placeholder: 'tasks.title_placeholder',
                    error: [],
                },
                {
                    value: 'pending',
                    name: 'status',
                    type: 'select',
                    label: 'tasks.status_label',
                    error: [],
                    options: [
                        {
                            value: 'pending',
                            label: 'tasks.status_pending',
                        },
                        {
                            value: 'completed',
                            label: 'tasks.status_completed',
                        },
                        {
                            value: 'stale',
                            label: 'tasks.status_stale',
                        }
                    ]
                },
                {
                    value: '',
                    name: 'due_date',
                    type: 'date',
                    label: 'tasks.due_date_label',
                    error: [],
                }
            ],
            buttonLabel: this.$t('tasks.create')
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