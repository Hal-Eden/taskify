<template>
    <span :class="[classNames, $attrs.class]">
        <slot />
    </span>
</template>

<script>

export default {
    props: {
        color: {
            type: String,
            default: 'default',
        }
    },
    computed: {
        classNames() {
            return `base-badge ${this.color}`;
        }
    },
    methods: {
        formHandler() {
            this.$emit('form-action');
        }
    },
}
</script>

<style>
.base-badge {
    @apply text-xs font-medium mx-1 my-1 px-2.5 py-0.5 rounded inline-block uppercase;
}

.default {
    @apply bg-blue-100 text-blue-800;
}

.dark {
    @apply bg-gray-100 text-gray-800;
}

.red {
    @apply bg-red-100 text-red-800;
}

.green {
    @apply bg-green-100 text-green-800;
}
</style>