<template>
    <button :type="type" @click="buttonHandler" :disabled="disabled" :class="baseClass">
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
    data() {
        return {
            baseClass: `text-${this.color}-800 border border-${this.color}-700 hover:bg-${this.color}-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-${this.color}-300 font-smal rounded-lg text-xs p-1 text-center inline-flex items-center me-2 dark:border-${this.color}-500 dark:text-${this.color}-500 dark:hover:text-white dark:focus:ring-${this.color}-800 dark:hover:bg-${this.color}-500`,
        }
    },
    methods: {
        buttonHandler() {
            this.$emit('button-action');
        }
    }

}
</script>