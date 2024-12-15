<template>
    <button :type="type" @click="buttonHandler" :disabled="disabled || isButtonLoading" :class="classNames">
        <template v-if="isButtonLoading && hasLoading">
            <base-icon class="mr-2 animate-spin" icon="button-loader"></base-icon>
            {{ $t('buttons.loading') }}
        </template>
        <slot v-else />
    </button>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    emits: ['button-action'],
    props: {
        type: {
            type: String,
            default: 'button'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        color: {
            type: String,
            default: 'default'
        },
        hasLoading: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        ...mapGetters(['isButtonLoading']),
        classNames() {
            return `base-button ${this.color} ${this.disabled || this.isButtonLoading ? 'cursor-not-allowed' : ''}`;
        }
    },
    methods: {
        buttonHandler() {
            this.$emit('button-action');
        }
    }

}
</script>

<style scoped>
    .base-button {
        @apply py-2.5 px-5 me-2 mb-2 text-sm font-medium rounded-lg whitespace-nowrap inline-flex;
    }

    .default {
        @apply text-gray-900 focus:outline-none bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10;
    }

    .red {
        @apply focus:outline-none text-white bg-red-700 hover:bg-red-800;
    }
</style>