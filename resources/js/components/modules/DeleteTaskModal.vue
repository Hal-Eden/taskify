<template>
    <delete-modal @confirm-modal="confirmModal" :title="$t('tasks.delete_modal_title')"
        :confirmLabel="$t('tasks.delete_modal_confirm')" :cancelLabel="$t('tasks.delete_modal_cancel')"></delete-modal>
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
