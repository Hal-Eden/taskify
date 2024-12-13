<template>
    <div>
        <base-header>Task Details</base-header>
        <task-info-card :task="task"></task-info-card>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TaskInfoCard from '../components/modules/TaskInfoCard.vue';

export default {
    components: { TaskInfoCard },
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