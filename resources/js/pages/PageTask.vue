<template>
    <div>
        <base-header>{{ $t('pages.task') }}</base-header>
        <loading-wrapper>
            <task-info-card :task="task"></task-info-card>
        </loading-wrapper>
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
        ...mapActions('tasks', ['getTask', 'clearTasks'])
    },
    beforeUnmount() {
        this.clearTasks();
    }
}
</script>