<template>
    <teleport to="body">
        <base-modal>
            <div class="p-4 md:p-5 text-center">
                <base-icon icon="info"></base-icon>
                <h3 class="title">
                    {{ title }}
                </h3>
                <base-button :has-loading="true" color="red" @click="confirmModal">
                    {{ confirmLabel }}
                </base-button>
                <base-button @click="toggleModal(false)">
                    {{ cancelLabel }}
                </base-button>
            </div>
        </base-modal>
    </teleport>
</template>

<script>
import BaseModal from '../elements/BaseModal.vue';
import { mapActions } from 'vuex';

export default {
    emits: ['confirm-modal'],
    props: {
        title: {
            type: String,
            default: '',
        },
        confirmLabel: {
            type: String,
            default: '',
        },
        cancelLabel: {
            type: String,
            default: '',
        }
    },
    components: { BaseModal },
    methods: {
        ...mapActions(['toggleModal']),
        confirmModal() {
            this.$emit('confirm-modal');
        }
    },
}
</script>

<style scoped>
.title {
    @apply mb-5 text-lg font-normal text-gray-500
}
</style>
