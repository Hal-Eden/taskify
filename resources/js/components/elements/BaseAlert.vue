<template>
    <div :class="classNames"
        role="alert">
        <base-icon icon="alert-info"></base-icon>
        <span class="sr-only">Info</span>
        <div>
            <span class="font-medium">{{ title }}</span> <slot />
        </div>
    </div>
</template>

<script>

export default {
    props: {
        title: {
            type: String,
            default: 'gray',
        }
    },
    computed: {
        classNames() {
            return `base-alert ${this.color}`;
        }
    },
}
</script>

<style>
.base-alert {
    @apply inline-flex items-center p-4 text-base rounded-lg text-gray-800 bg-gray-50
}
</style>