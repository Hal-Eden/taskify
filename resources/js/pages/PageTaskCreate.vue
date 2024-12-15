<template>
    <div>
        <base-header>{{ $t('pages.create_task') }}</base-header>
        <task-form-create></task-form-create>
    </div>
</template>

<script>
import TaskFormCreate from '../components/modules/TaskFormCreate.vue';

export default {
    components: { TaskFormCreate },
}
</script>