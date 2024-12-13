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
                    name: 'title',
                    type: 'text',
                    label: 'Title',
                    placeholder: 'Task title',
                    error: '',
                },
                {
                    value: 'pending',
                    name: 'status',
                    type: 'select',
                    label: 'Status',
                    placeholder: 'Task Status',
                    error: '',
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
                    error: '',
                }
            ],
            buttonLabel: 'UPDATE'
        }
    },
    watch: {
        task() {
            const newInputs = JSON.parse(JSON.stringify(this.inputs));

            newInputs.map(input => {
                input.value = this.task[input.name] || '';

                return input;
            })

            this.inputs = newInputs;
        }
    },
    computed: {
        ...mapGetters('tasks', ['task']),
    },
    methods: {
        ...mapActions('tasks', ['update']),
        inputsHandler(inputs) {
            this.inputs = inputs;
        },
        async formHandler(data) {
            const taskId = this.$route.params.taskId;

            data.user_id = this.task.user_id;

            const task = await this.update({ data, taskId });

            this.$router.push({ name: 'task', params: { taskId: task.id } });
        }
    }
}
</script>