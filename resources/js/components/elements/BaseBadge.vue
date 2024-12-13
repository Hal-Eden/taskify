<template>
    <span :class="classNames">
        <slot />
    </span>
</template>

<script>

export default {
    props: {
        color: String,
        default: 'default',
    },
    data() {
        return {
            baseClass: 'text-xs font-medium mx-1 my-1 px-2.5 py-0.5 rounded inline-block',
            colorClasses: {
                default: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
                dark: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
                red: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
                green: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
            }
        }
    },
    computed: {
        classNames() {
            return this.baseClass + ' ' + this.colorClasses[this.color];
        }
    },
    methods: {
        formHandler() {
            this.$emit('form-action');
        }
    },
}
</script>