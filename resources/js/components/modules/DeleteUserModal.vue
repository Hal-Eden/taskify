<template>
    <delete-modal @confirm-modal="confirmModal" title="Are you sure you want to delete this User?"
        confirmLabel="Yes, I'm sure" cancelLabel="No, cancel"></delete-modal>
</template>

<script>
import DeleteModal from '../groups/DeleteModal.vue';

export default {
    components: { DeleteModal },
    emits: ['confirm-modal'],
    methods: {
        confirmModal() {
            this.$emit('confirm-modal');
        }
    },
}
</script>
