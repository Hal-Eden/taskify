<template>
    <div class="card">
        <base-label color="gray" :stat="statuses.total" label="Tasks"></base-label>
        <base-label color="blue" :stat="statuses.pending" label="Pending"></base-label>
        <base-label color="green" :stat="statuses.completed" label="Completed"></base-label>
        <base-label color="red" :stat="statuses.stale" label="Stale"></base-label>
        <base-label color="gray" :stat="users.length" label="Users"></base-label>
    </div>
</template>

<script>
import BaseLabel from '../elements/BaseLabel.vue';

export default {
    components: { BaseLabel },
    props: {
        statuses: {
            type: Object,
            default: {}
        },
        users: {
            type: Array,
            default: []
        },
        isAdmin: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
.card {
    @apply flex flex-wrap justify-center items-center gap-4;
}
</style>