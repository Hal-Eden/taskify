<template>
    <button :type="type" @click="buttonHandler" :disabled="disabled" :class="classNames">
        <slot />
    </button>
</template>

<script>

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
            default: 'blue'
        }
    },
    computed: {
        classNames() {
            return `base-button-icon ${this.color}`
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
.base-button-icon {
    @apply rounded-lg text-xs p-1 text-center inline-flex items-center mx-1 md:mx-0 md:me-2 focus:outline-none;
}

.blue {
    @apply text-blue-800 border border-blue-700 hover:bg-blue-800 hover:text-white;
}

.red {
    @apply text-red-800 border border-red-700 hover:bg-red-800 hover:text-white;
}
</style>