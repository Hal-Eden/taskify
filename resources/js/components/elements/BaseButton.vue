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
            default: 'default'
        }
    },
    data() {
        return {
            baseClass: 'py-2.5 px-5 me-2 mb-2 text-sm font-medium rounded-lg focus:ring-4',
            colorClasses: {
                default: 'text-gray-900 focus:outline-none bg-white  border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700',
                red: 'focus:outline-none text-white bg-red-700 hover:bg-red-800  focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900',
            }
        }
    },
    computed: {
        classNames() {
            return this.baseClass + ' ' + this.colorClasses[this.color];
        }
    },
    methods: {
        buttonHandler() {
            this.$emit('button-action');
        }
    }

}
</script>