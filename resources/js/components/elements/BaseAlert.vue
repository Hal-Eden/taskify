<template>
    <div class="base-alert"
        role="alert">
        <base-icon class="mr-1" icon="alert-info"></base-icon>
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
}
</script>

<style>
.base-alert {
    @apply inline-flex items-center p-4 text-base rounded-lg text-gray-800 bg-gray-50
}
</style>