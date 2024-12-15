<template>
    <div>
        <base-header>{{ $t('pages.edit_task') }}</base-header>
        <loading-wrapper>
            <task-form-edit></task-form-edit>
        </loading-wrapper>
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
        ...mapActions('tasks', ['getTask', 'clearTasks'])
    },
    beforeUnmount() {
        this.clearTasks();
    }
}
</script>