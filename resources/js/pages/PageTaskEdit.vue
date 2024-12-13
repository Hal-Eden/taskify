<template>
    <div>
        <base-header>Edit Task</base-header>
        <task-form-edit></task-form-edit>
    </div>
</template>

<script>
import TaskFormEdit from '../components/modules/TaskFormEdit.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
    components: { TaskFormEdit },
    mounted() {
        const taskId = this.$route.params.taskId;

        this.getTask({ taskId });
    },
    computed: {
        ...mapGetters('tasks', ['task']),
    },
    methods: {
        ...mapActions('tasks', ['getTask'])
    }
}
</script>